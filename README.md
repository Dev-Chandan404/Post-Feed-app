<div align="center">

<sub>Dev-Chandan404 / Post-Feed-app</sub>

# 💭 Post Feed App 💭

### *Create. Post. Share. Instantly.*

<br/>

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://postfeedapp-neon.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dev-Chandan404/Post-Feed-app)
[![Report Bug](https://img.shields.io/badge/REPORT_BUG-ff69b4?style=for-the-badge&logo=bugsnag&logoColor=white)](https://github.com/Dev-Chandan404/Post-Feed-app/issues)
[![Request Feature](https://img.shields.io/badge/REQUEST_FEATURE-00CED1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dev-Chandan404/Post-Feed-app/discussions)

<br/>

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)](LICENSE)

<br/>

[![Commits](https://img.shields.io/github/commit-activity/t/Dev-Chandan404/Post-Feed-app?style=flat-square&label=commits)](https://github.com/Dev-Chandan404/Post-Feed-app/commits)
[![Repo size](https://img.shields.io/github/repo-size/Dev-Chandan404/Post-Feed-app?style=flat-square)](https://github.com/Dev-Chandan404/Post-Feed-app)
[![Stars](https://img.shields.io/github/stars/Dev-Chandan404/Post-Feed-app?style=flat-square&color=ffd700)](https://github.com/Dev-Chandan404/Post-Feed-app/stargazers)

<br/>

*A minimal social feed app for quick post sharing*

</div>

---

## 🌐 Live Preview

> 🔗 **[https://postfeedapp-neon.vercel.app/](https://postfeedapp-neon.vercel.app/)**

| Service | URL | Status |
|---------|-----|--------|
| 🖥️ Frontend | [postfeedapp-neon.vercel.app](https://postfeedapp-neon.vercel.app/) | ![Vercel](https://img.shields.io/badge/Vercel-Live-00C853?style=flat-square&logo=vercel) |
| ⚙️ Backend | Render.com | ![Render](https://img.shields.io/badge/Render-Live-46E3B7?style=flat-square&logo=render) |

---

## ✨ About the Project

> A lightweight **post feed application** where users can create posts and instantly view them in the feed. Built with modern web technologies for simplicity and speed.

This project combines **React's component architecture**, **Node.js backend**, and **MongoDB's data storage** to create a minimal yet functional social platform.

---

## 🎯 Key Features

- 📝 **Post Creation** — Create and share posts instantly
- 🎨 **Feed Display** — View all posts in a clean, organized feed
- ⚡ **Instant Redirect** — Auto-redirect to feed after posting
- 📱 **Responsive Design** — Works seamlessly on all devices
- 🗄️ **Persistent Storage** — Posts saved to MongoDB
- 🎯 **Simple & Fast** — Minimal, lightweight, blazing fast

---

## 🛠️ Built With

<div align="center">

| React | Node.js | Express | MongoDB | CSS3 | JavaScript |
|-------|---------|---------|---------|------|-----------|
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="48"/> | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="48"/> | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="48"/> | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="48"/> | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="48"/> | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="48"/> |

</div>

---

## 📂 App Flow

| Step | Description |
|------|-------------|
| 🏠 **Create Post** | User fills in the post form with content |
| ✍️ **Submit** | Post gets saved to MongoDB database |
| 🔄 **Redirect** | Automatically taken to feed page |
| 📰 **View Feed** | See all posts displayed beautifully |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Dev-Chandan404/Post-Feed-app.git
cd Post-Feed-app

# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

---

## 🚀 Running the Application

```bash
# Backend Setup
cd Backend
npm start
# Server runs on http://localhost:5000

# Frontend Setup (in another terminal)
cd Frontend
npm start
# Application opens at http://localhost:3000
```

---

## 📁 Project Structure

```
Post-Feed-app/
├── 📂 Frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── PostForm.js
│   │   │   ├── Feed.js
│   │   │   └── PostCard.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── 📂 Backend/
│   ├── 📂 models/
│   │   └── Post.js
│   ├── 📂 routes/
│   │   └── posts.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 📡 API Endpoints

### Posts
```
GET    /api/posts       — Fetch all posts
POST   /api/posts       — Create new post
```

---

## 🔐 Environment Variables

Create a `.env` file in the Backend folder:

```env
MONGODB_URI=mongodb://localhost:27017/post-feed-app
PORT=5000
NODE_ENV=development
```

---

## 🎯 How It Works

1. User opens the app
2. Creates a post using the form
3. Submits the post
4. Gets redirected to the feed page
5. Sees the newly created post instantly

---

## 🚀 Future Features

- [ ] Delete post functionality
- [ ] Like/Unlike posts
- [ ] Comments on posts
- [ ] User authentication
- [ ] User profiles
- [ ] Search functionality

---
<div align="center">

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<br/>

✨ **Let's Connect** ✨

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dev.chandankumar404@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dev-Chandan404)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=netlify&logoColor=white)](https://chandan404.netlify.app/)

<br/>

⭐ **If you like this project, please give it a star!** ⭐

*Made with ❤️ by **Chandan Kumar***

</div>
