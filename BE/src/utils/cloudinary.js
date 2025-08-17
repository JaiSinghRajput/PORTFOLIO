import { v2 as cloudinary } from 'cloudinary';
import { Console, error } from 'console';
import fs from "fs"
import { fileURLToPath } from 'url';


const uploadOnCloudinary = async (localFilePath) => {
    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
    });
    try {

        if (!localFilePath) { return null; }
        const uploadRes = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // alert("file is Uploaded in CLoudinary ! the url of file is : ", uploadRes.secure_url)
        fs.unlinkSync(localFilePath) // remove the local saved file as the uploading is failed
        console.log(uploadRes);
        return uploadRes.url
    } catch (error) {
        return null;
    }
}

const deleteFromCloudinary = async (imageurl) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
    });

    const isDeleted = await cloudinary.api.delete_resources(imageurl,(error , result)=>console.log(result))
    console.log(isDeleted);
    return isDeleted;
}
export { uploadOnCloudinary , deleteFromCloudinary }