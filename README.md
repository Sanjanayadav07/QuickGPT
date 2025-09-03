<h1 align="center">🤖 QuickGPT - AI Chat & Image Generator</h1>

# 🎨 QuickGPT Frontend</h2>
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)  
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)  
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)  

This is the **frontend client** for QuickGPT.  
It is built with **React, Tailwind CSS, and Context API** for state management.

---

## ⚙️ Tech Stack
- ⚛️ React + Vite  
- 🎨 Tailwind CSS  
- 🌀 Context API  
- 🌐 Axios  
- 🔔 React Hot Toast  
- ⏳ Moment.js  

---

## 📂 Folder Structure
```
client/
│── components/ # UI components
│── context/ # AppContext
│── pages/ # Login, Chat, Credits
│── assets/ # Images & icons
│── App.jsx # Main app
└── README.md

```
---

## 🛠️ Setup Instructions

```bash
# Go to client folder
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```
👉 Create a .env file in client/ and add
```
VITE_SERVER_URL=http://localhost:3000
```
## 🔑 Features
- User login & registration
- Chat with AI
- Generate AI images
- Purchase credits (Stripe integrated)
- Dark/Light theme toggle
- Recent chats list
-----
# ⚡ QuickGPT Backend  

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)  
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)  
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)  

This is the **backend API** for QuickGPT.  
It is built with **Node.js, Express.js, MongoDB, and Stripe** for payments.  

---

## ⚙️ Tech Stack  
- 🚀 Node.js + Express.js  
- 🍃 MongoDB + Mongoose  
- 💳 Stripe API (Payments & Webhooks)  
- 🔑 JWT Authentication  
- 🛡️ Middleware (Auth & Error handling)  


## 📂 Folder Structure
```
server/
│── models/         # Mongoose models (User, Chat, Transaction)
│── routes/         # Express routes (auth, chat, credit)
│── controllers/    # Controller logic
│── middleware/     # Auth middleware
│── configs/        # DB connection, Stripe config
│── server.js       # Entry point
│── .env            # Environment variables
└── README.md

```

## 🛠️ Setup Instructions  

```bash
# Go to backend folder
cd server

# Install dependencies
npm install

# Start development server
npm run dev
```
👉 Create a .env file in server/ and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
PORT=3000
```
## 🔑 Features
- User authentication (JWT-based)
- Chat API for AI conversations
- Credit purchase (Stripe integration)
- Webhook support for Stripe events
- Secure routes with middleware
- RESTful API structure

 ## 🤝 Contributing
 Contributions, issues, and feature requests are welcome!  
 Feel free to check the [issues page](../../issues).  

### Steps to Contribute
1. 🍴 Fork this repository
2. 👯 Clone your fork
   ```
   git clone https://github.com/<your-username>/QuickGPT.git
   ```
3. 🔧 Create a new branch:
```
git checkout -b feature-branch
```
4. 📝 Make your changes and commit
```
git commit -m "Add new feature"
```
5. 🚀 Push to your fork:
```
git push origin feature-branch
```
6. 🎉 Open a Pull Request

## 📜 License

MIT License © 2025 Sanjana Yadav

## 📬 Let's Connect
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sanjana-yadav007/)  
[![Gmail](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sanjanayadav3952@gmail.com)


