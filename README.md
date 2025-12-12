# 🚀 QuickBlog - AI-Powered Blogging Platform

A responsive web application where admins can create blogs using AI and users can read and comment on posts.

## 🌐 Live Demo

[View Live Project](https://blog-app-smu7.vercel.app)

## 📸 Screenshots

### Home Page
![Home Page](<img width="1600" height="900" alt="Screenshot from 2025-12-07 16-49-38" src="https://github.com/user-attachments/assets/09cf42ab-bc99-4200-a0ce-4733d70ca8db" />
)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

### Blog Editor with AI
![Blog Editor](screenshots/blog-editor.png)

### User Comments
![Comments Section](screenshots/comments.png)

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
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
```

Start server:
```bash
npm start
```

3. **Frontend Setup**
```bash
cd client
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

Start development server:
```bash
npm run dev
```

## 📄 License

MIT License

## 👤 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

---

⭐ If you like this project, please give it a star!
