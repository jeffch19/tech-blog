const router = require("express").Router()
const {
  renderSinglePost,
  renderNewPost,
  createPost,
  allPosts,
  onePost,
  updatePost
} = require("../../controllers/postController")

router.get("/singlepost", renderSinglePost);
router.get("/new", renderNewPost);
router.post("/", createPost);
router.get('/', allPosts);
router.get('/one/:id', onePost);
router.post('/update/:id', updatePost);

module.exports = router