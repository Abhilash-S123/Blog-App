# 🚀 QuickBlog - AI-Powered Blogging Platform

A responsive web application where admins can create blogs using AI and users can read and comment on posts.

## 🌐 Live Demo

[View Live Project](https://blog-app-smu7.vercel.app)

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/Abhilash-S123/Blog-App/blob/master/Screenshot%20from%202025-12-07%2016-49-38.png?raw=true)

### Admin Dashboard
![Admin Dashboard](https://github.com/Abhilash-S123/Blog-App/blob/master/Screenshot%20from%202025-12-12%2012-32-53.png?raw=true)

## ✨ Features

### 👨‍💼 Admin Features
- 🤖 Create blogs using Google Gemini AI
- 📝 Publish and unpublish blogs
- 🔐 JWT authentication for secure access
- ✅ Verify or delete user comments
- 🛡️ Protected routes with middleware

### 👥 User Features
- 📖 Read published blogs
- 💬 Add comments on blog posts
- 📱 Fully responsive design with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **APIs:** Google Gemini AI, ImageKit API
- **Authentication:** JWT

## 🔑 Demo Credentials

**Admin Login:**
- Email: `admin@example.com`
- Password: `greatstack`

## 📦 Installation

### Prerequisites
- Node.js
- MongoDB
- Git

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/quickblog.git
cd quickblog
```

2. **Backend Setup**
```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
ADMIN_PASSWORD=set_any_admin_password
ADMIN_EMAIL=set_any_admin_email
```

Start server:
```bash
npm run server
```

3. **Frontend Setup**
```bash
cd client
npm install
```

Create `.env` file:
```env
VITE_BACKEND_URL=http://localhost:5000
```

Start frontend server:
```bash
npm run dev
```

## 📄 License

MIT License

## 👤 Author

Your Name - [GitHub Profile](https://github.com/Abhilash-S123)

---

⭐ If you like this project, please give it a star!
