# Portfolio Backend API Documentation

## Base URL
```
http://127.0.0.1:5000/api
```

## Authentication
The API uses JWT tokens stored in HTTP-only cookies for admin authentication. Admin routes require the `admin_token` cookie to be present.

## Response Format
All responses follow a consistent format:

### Success Response
```json
{
  "statusCode": 200,
  "data": {...},
  "message": "Success message",
  "success": true
}
```

### Error Response
```json
{
  "statusCode": 400,
  "message": "Error message",
  "errors": [],
  "success": false
}
```

---

## 🔐 Admin Authentication

### Create Admin (One-time setup)
**POST** `/admin/add`

Creates the first admin user. Only one admin can exist.

**Request Body:**
```json
{
  "adminUserName": "admin",
  "adminPassword": "securepassword123"
}
```

**Response:**
```json
{
  "statusCode": 201,
  "data": {
    "id": "64a7b8c9d1e2f3a4b5c6d7e8"
  },
  "message": "Admin created successfully",
  "success": true
}
```

### Admin Login
**POST** `/admin/login`

**Request Body:**
```json
{
  "adminUserName": "admin",
  "adminPassword": "securepassword123"
}
```

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Login successful",
  "success": true
}
```

### Admin Logout
**POST** `/admin/logout` 🔒

Clears the authentication cookie.

**Response:**
```json
{
  "statusCode": 200,
  "message": "Logout successful",
  "success": true
}
```

### Get Admin Profile
**GET** `/admin/profile` 🔒

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "adminUserName": "admin",
    "lastLogin": "2024-01-15T10:30:00.000Z"
  },
  "message": "Admin profile",
  "success": true
}
```

---

## 🦸 Hero Section

### Get Hero Section
**GET** `/hero`

**Response:**
```json
{
  "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
  "HeroTitle": "Full Stack Developer",
  "HeroSubtitle": "Building amazing web applications",
  "HeroBgImage": "https://example.com/hero-bg.jpg",
  "KPI": [
    {
      "kpiPoint": "Projects Completed",
      "kpiValue": "50+"
    },
    {
      "kpiPoint": "Years Experience",
      "kpiValue": "3"
    }
  ]
}
```

### Create/Update Hero Section
**POST** `/admin/hero` 🔒

**Request Body:**
```json
{
  "HeroTitle": "Full Stack Developer",
  "HeroSubtitle": "Building amazing web applications",
  "HeroBgImage": "https://example.com/hero-bg.jpg",
  "KPI": [
    {
      "kpiPoint": "Projects Completed",
      "kpiValue": "50+"
    }
  ]
}
```

---

## 👤 About Section

### Get About Section
**GET** `/about`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "Overview": {
      "aboutTitle": "About Me",
      "content": "I am a passionate developer...",
      "points": [
        {"point": "Full Stack Development"},
        {"point": "UI/UX Design"}
      ],
      "resumeLink": "https://example.com/resume.pdf"
    },
    "Skills": [
      {
        "skillName": "JavaScript",
        "proficiency": 90
      },
      {
        "skillName": "React",
        "proficiency": 85
      }
    ],
    "Experience": [
      {
        "companyName": "Tech Corp",
        "position": "Senior Developer",
        "duration": "2022 - Present",
        "description": "Led development of web applications..."
      }
    ]
  },
  "message": "About section retrieved successfully",
  "success": true
}
```

### Create About Section
**POST** `/admin/about` 🔒

**Request Body:**
```json
{
  "Overview": {
    "aboutTitle": "About Me",
    "content": "I am a passionate developer...",
    "points": [
      {"point": "Full Stack Development"},
      {"point": "UI/UX Design"}
    ],
    "resumeLink": "https://example.com/resume.pdf"
  },
  "Skills": [
    {
      "skillName": "JavaScript",
      "proficiency": 90
    }
  ],
  "Experience": [
    {
      "companyName": "Tech Corp",
      "position": "Senior Developer",
      "duration": "2022 - Present",
      "description": "Led development of web applications..."
    }
  ]
}
```

### Update About Section
**PUT** `/admin/about` 🔒

Same request body format as create.

---

## 🛠️ Services

### Get All Services
**GET** `/services`

**Response:**
```json
{
  "statusCode": 200,
  "data": [
    {
      "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
      "title": "Web Development",
      "slug": "web-development",
      "Price": "$500",
      "Description": "Custom web application development",
      "image": "https://example.com/service1.jpg",
      "timeline": "2-4 weeks",
      "technologies": ["React", "Node.js", "MongoDB"],
      "Features": ["Responsive Design", "SEO Optimized"]
    }
  ],
  "message": "Services fetched",
  "success": true
}
```

### Get Service by Slug
**GET** `/services/:slug`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "title": "Web Development",
    "slug": "web-development",
    "Price": "$500",
    "Description": "Custom web application development",
    "image": "https://example.com/service1.jpg",
    "timeline": "2-4 weeks",
    "technologies": ["React", "Node.js", "MongoDB"],
    "Features": ["Responsive Design", "SEO Optimized"]
  },
  "message": "Service fetched",
  "success": true
}
```

### Create Service
**POST** `/admin/service` 🔒

**Request Body:**
```json
{
  "title": "Web Development",
  "slug": "web-development",
  "Price": "$500",
  "Description": "Custom web application development",
  "image": "https://example.com/service1.jpg",
  "timeline": "2-4 weeks",
  "technologies": ["React", "Node.js", "MongoDB"],
  "Features": ["Responsive Design", "SEO Optimized"]
}
```

### Update Service
**PUT** `/admin/service/:slug` 🔒

Same request body format as create.

### Delete Service
**DELETE** `/admin/service/:slug` 🔒

---

## 🚀 Projects

### Get All Projects
**GET** `/projects`

**Response:**
```json
{
  "statusCode": 200,
  "data": [
    {
      "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
      "title": "E-commerce Platform",
      "slug": "ecommerce-platform",
      "category": "Full Stack",
      "coverImage": "https://example.com/project1.jpg",
      "shortDescription": "Modern e-commerce solution",
      "detailedDescription": "A comprehensive e-commerce platform...",
      "technologies": ["React", "Node.js", "MongoDB"],
      "repositoryLink": "https://github.com/user/project",
      "liveLink": "https://project-demo.com",
      "isFeatured": true
    }
  ],
  "message": "Projects fetched",
  "success": true
}
```

### Get Project by Slug
**GET** `/projects/:slug`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "title": "E-commerce Platform",
    "slug": "ecommerce-platform",
    "category": "Full Stack",
    "coverImage": "https://example.com/project1.jpg",
    "shortDescription": "Modern e-commerce solution",
    "detailedDescription": "A comprehensive e-commerce platform...",
    "technologies": ["React", "Node.js", "MongoDB"],
    "repositoryLink": "https://github.com/user/project",
    "liveLink": "https://project-demo.com",
    "isFeatured": true
  },
  "message": "Project fetched",
  "success": true
}
```

### Create Project
**POST** `/admin/projects` 🔒

**Request Body:**
```json
{
  "title": "E-commerce Platform",
  "slug": "ecommerce-platform",
  "category": "Full Stack",
  "coverImage": "https://example.com/project1.jpg",
  "shortDescription": "Modern e-commerce solution",
  "detailedDescription": "A comprehensive e-commerce platform...",
  "technologies": ["React", "Node.js", "MongoDB"],
  "repositoryLink": "https://github.com/user/project",
  "liveLink": "https://project-demo.com",
  "isFeatured": true
}
```

### Update Project
**PUT** `/admin/projects/:slug` 🔒

Same request body format as create.

### Delete Project
**DELETE** `/admin/projects/:slug` 🔒

---

## 📝 Blogs

### Get Published Blogs
**GET** `/blogs`

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `tag` (string): Filter by tag
- `isFeatured` (boolean): Filter featured blogs

**Example:** `/blogs?page=1&limit=5&isFeatured=true`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "blogs": [
      {
        "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
        "title": "Getting Started with React",
        "slug": "getting-started-react",
        "coverImage": "https://example.com/blog1.jpg",
        "content": "React is a powerful library...",
        "author": "John Doe",
        "isPublished": true,
        "isFeatured": true,
        "isMain": false,
        "tags": ["React", "JavaScript"],
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2024-01-15T10:30:00.000Z"
      }
    ],
    "total": 25,
    "page": 1,
    "limit": 5
  },
  "message": "Published blogs fetched",
  "success": true
}
```

### Get Blog by Slug
**GET** `/blogs/:slug`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "title": "Getting Started with React",
    "slug": "getting-started-react",
    "coverImage": "https://example.com/blog1.jpg",
    "content": "React is a powerful library...",
    "author": "John Doe",
    "isPublished": true,
    "isFeatured": true,
    "isMain": false,
    "tags": ["React", "JavaScript"],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Blog fetched",
  "success": true
}
```

### Get All Blogs (Admin)
**GET** `/admin/blogs` 🔒

**Query Parameters:**
- `isPublished` (boolean): Filter by publication status
- `isFeatured` (boolean): Filter featured blogs
- `isMain` (boolean): Filter main blogs
- `tag` (string): Filter by tag

### Create Blog
**POST** `/admin/blog` 🔒

**Request Body:**
```json
{
  "title": "Getting Started with React",
  "slug": "getting-started-react",
  "coverImage": "https://example.com/blog1.jpg",
  "content": "React is a powerful library for building user interfaces...",
  "author": "John Doe",
  "isPublished": true,
  "isFeatured": true,
  "isMain": false,
  "tags": ["React", "JavaScript", "Frontend"]
}
```

### Update Blog
**PUT** `/admin/blog/:slug` 🔒

Same request body format as create.

### Delete Blog
**DELETE** `/admin/blog/:slug` 🔒

---

## 🎥 YouTube Videos

### Get Published Videos
**GET** `/youtube`

**Response:**
```json
[
  {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "title": "React Tutorial for Beginners",
    "slug": "react-tutorial-beginners",
    "coverImage": "https://example.com/video1.jpg",
    "videoUrl": "https://youtube.com/watch?v=abc123",
    "description": "Learn React from scratch...",
    "type": "long",
    "channelName": "TechChannel",
    "isFeatured": true,
    "isPublished": true,
    "tags": ["React", "Tutorial"],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

### Get Video by Slug
**GET** `/youtube/:slug`

**Response:**
```json
{
  "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
  "title": "React Tutorial for Beginners",
  "slug": "react-tutorial-beginners",
  "coverImage": "https://example.com/video1.jpg",
  "videoUrl": "https://youtube.com/watch?v=abc123",
  "description": "Learn React from scratch...",
  "type": "long",
  "channelName": "TechChannel",
  "isFeatured": true,
  "isPublished": true,
  "tags": ["React", "Tutorial"],
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### Get All Videos (Admin)
**GET** `/admin/youtube` 🔒

### Create Video
**POST** `/admin/youtube` 🔒

**Request Body:**
```json
{
  "title": "React Tutorial for Beginners",
  "slug": "react-tutorial-beginners",
  "coverImage": "https://example.com/video1.jpg",
  "videoUrl": "https://youtube.com/watch?v=abc123",
  "description": "Learn React from scratch in this comprehensive tutorial",
  "type": "long",
  "channelName": "TechChannel",
  "isFeatured": true,
  "isPublished": true,
  "tags": ["React", "Tutorial", "JavaScript"]
}
```

### Update Video
**PUT** `/admin/youtube/:slug` 🔒

Same request body format as create.

### Delete Video
**DELETE** `/admin/youtube/:slug` 🔒

### Toggle Video Publish Status
**PATCH** `/admin/youtube/toggle-publish/:slug` 🔒

**Response:**
```json
{
  "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
  "title": "React Tutorial for Beginners",
  "slug": "react-tutorial-beginners",
  "isPublished": false,
  // ... other fields
}
```

---

## 📬 Inbox (Contact Messages)

### Submit Message
**POST** `/inbox`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a potential project..."
}
```

**Response:**
```json
{
  "statusCode": 201,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a potential project...",
    "isRead": false,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Message submitted successfully",
  "success": true
}
```

### Get All Messages (Admin)
**GET** `/admin/inbox` 🔒

**Response:**
```json
{
  "statusCode": 200,
  "data": [
    {
      "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I would like to discuss a potential project...",
      "isRead": false,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "message": "Messages fetched successfully",
  "success": true
}
```

### Mark Message as Read
**PATCH** `/admin/inbox/:id/read` 🔒

### Delete Message
**DELETE** `/admin/inbox/:id` 🔒

---

## 📞 Contact Information

### Get Contact Information
**GET** `/contact`

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "_id": "64a7b8c9d1e2f3a4b5c6d7e8",
    "title": "Get In Touch",
    "description": "Feel free to reach out for any inquiries",
    "details": [
      {
        "key": "Email",
        "value": "contact@example.com"
      },
      {
        "key": "Phone",
        "value": "+1234567890"
      }
    ],
    "profileLinks": [
      {
        "platform": "LinkedIn",
        "link": "https://linkedin.com/in/johndoe"
      },
      {
        "platform": "GitHub",
        "link": "https://github.com/johndoe"
      }
    ],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Contact info fetched successfully",
  "success": true
}
```

### Create Contact Information
**POST** `/admin/contact` 🔒

**Request Body:**
```json
{
  "title": "Get In Touch",
  "description": "Feel free to reach out for any inquiries",
  "details": [
    {
      "key": "Email",
      "value": "contact@example.com"
    },
    {
      "key": "Phone",
      "value": "+1234567890"
    }
  ],
  "profileLinks": [
    {
      "platform": "LinkedIn",
      "link": "https://linkedin.com/in/johndoe"
    },
    {
      "platform": "GitHub",
      "link": "https://github.com/johndoe"
    }
  ]
}
```

### Update Contact Information
**PUT** `/admin/contact` 🔒

Same request body format as create.

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 500 | Internal Server Error |

## Authentication Notes

- 🔒 indicates protected routes requiring admin authentication
- Authentication is handled via HTTP-only cookies
- JWT tokens expire in 1 hour (configurable via `JWT_EXPIRATION` env variable)
- Include cookies in requests to protected endpoints

## Environment Variables Required

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1
PORT=5000
```

## Example Usage with JavaScript Fetch

### Public API Call
```javascript
const response = await fetch('http://127.0.0.1:5000/api/projects');
const data = await response.json();
console.log(data);
```

### Admin API Call (with credentials)
```javascript
const response = await fetch('http://127.0.0.1:5000/api/admin/blogs', {
  method: 'GET',
  credentials: 'include', // Important for cookies
  headers: {
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data);
```

### Creating a Resource
```javascript
const response = await fetch('http://127.0.0.1:5000/api/admin/blog', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "New Blog Post",
    slug: "new-blog-post",
    content: "Blog content here...",
    author: "John Doe",
    tags: ["tech", "tutorial"]
  })
});
const data = await response.json();
console.log(data);
```