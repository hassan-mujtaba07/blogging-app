

Readme · MD
# Blogify
 
A full-stack blogging web application built with Node.js, Express, and MongoDB — allowing users to sign up, create blog posts with cover images, and comment on posts.
 
## Features
 
- User authentication (Sign up / Sign in) with JWT and cookie-based sessions
- Create and publish blog posts with a title, body, and cover image
- View all blogs on the homepage in a responsive card grid
- Comment on blog posts (logged-in users only)
- Author info and profile images displayed on posts and comments
- Server-side rendering with EJS templates
- Responsive UI styled with Bootstrap
## Tech Stack
 
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose (ODM)
- **Templating:** EJS
- **Authentication:** JWT, cookies
- **Styling:** Bootstrap 5
- **File Uploads:** Multer (for cover images and profile pictures)
## Project Structure
 
```
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
```
 
## Getting Started
 
### Prerequisites
 
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas connection string
### Installation
 
1. Clone the repository
```bash
   git clone https://github.com/hassan-mujtaba07/youtubeBlog.git
   cd youtubeBlog
```
 
2. Install dependencies
```bash
   npm install
```
 
3. Create a `.env` file in the root directory and add:
```
   PORT=8000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
```
 
4. Start the server
```bash
   npm start
```
   or with nodemon during development:
```bash
   nodemon index.js
```
 
5. Visit `http://localhost:8000` in your browser
## Usage
 
1. Create an account or sign in
2. Click "Create Blog" to publish a new post with a title, body, and cover image
3. Browse posts on the homepage
4. Open any post to read it and leave a comment
## Future Improvements
 
- Edit and delete blog posts
- Like/reaction system on posts
- Pagination for the homepage blog feed
- Search and category filters
- Rich text editor for blog body instead of plain text
## Author
 
**Hassan Mujtaba**
GitHub: [@hassan-mujtaba07](https://github.com/hassan-mujtaba07)
 
## License
 
This project is open source and available for learning purposes.
