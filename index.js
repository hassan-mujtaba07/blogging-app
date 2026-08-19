const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const userRoute = require("./route/user");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");
const blogRoute = require("./route/blog");
const blog = require("./models/blog");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then(console.log("MongoDb connnected!"));

app.get("/", async (req, res) => {
  const allBlogs = await blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.post("/", (req, res) => {
  return res.render("home");
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
