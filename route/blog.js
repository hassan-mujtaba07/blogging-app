const {Router} = require('express');
const User = require('../models/user');
const router = Router();
const multer = require("multer");
const path = require('path');
const blog = require('../models/blog');
const Comment = require('../models/comment');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null,fileName);
  },
});

const upload = multer({ storage: storage });

router.get('/add-new',(req,res)=>{
    return res.render('addBlog',{
        user:req.user
    });
})

router.post('/',upload.single('coverImage'), async (req,res)=>{
    const {title , body} = req.body;
   const Blog = await blog.create({
        body,
        title,
        createdBy : req.user._id, 
        coverImageURL : `/uploads/${req.file.filename}`
    })
    return res.redirect(`/Blog/${Blog._id}`);
})

router.get('/:id', async (req,res)=>{
    const getBlog = await blog.findById(req.params.id).populate("createdBy");
    const comments = await Comment.find({blogId : req.params.id}).populate("createdBy");
    console.log("comments",comments)
    return res.render('blog',{
      user : req.user,
      getBlog,
      comments,
    })
})


router.post('/comment/:blogId', async (req,res)=>{
  const comment = await Comment.create({
    content: req.body.content,
    blogId : req.params.blogId,
    createdBy: req.user._id
  })
  return res.redirect(`/blog/${req.params.blogId}`);
})

module.exports = router;