Blogify

A full-stack blogging web application built with Node.js, Express, and MongoDB — allowing users to sign up, create blog posts with cover images, and comment on posts.

Features
User authentication (Sign up / Sign in) with JWT and cookie-based sessions
Create and publish blog posts with a title, body, and cover image
View all blogs on the homepage in a responsive card grid
Comment on blog posts (logged-in users only)
Author info and profile images displayed on posts and comments
Server-side rendering with EJS templates
Responsive UI styled with Bootstrap
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB with Mongoose (ODM)
Templating: EJS
Authentication: JWT, cookies
Styling: Bootstrap 5
File Uploads: Multer (for cover images and profile pictures)

Project Structure
youtubeBlog/
├── models/          # Mongoose schemas (User, Blog, Comment)
├── routes/          # Express route handlers
├── views/           # EJS templates
│   └── partials/    # Shared head, nav, script includes
├── public/          # Static assets (CSS, uploaded images)
├── middlewares/      # Auth middleware, error handling
├── .env             # Environment variables (not committed)
├── .gitignore
├── package.json
└── index.js         # App entry point
