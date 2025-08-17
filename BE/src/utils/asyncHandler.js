const asyncHandler = (requestHandler) =>(req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }


//-----by try catch ------
// const asyncHandler = (func)=> async (req,res,next)=>{
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//         console.log(error)
//         next(error)
//     }
// }

export {asyncHandler}