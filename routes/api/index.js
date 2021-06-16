const router = require("express").Router();
const postsRoute = require("./post");
const commentsRoute = require("./comment");

router.use("/comment", commentsRoute);
router.use("/post", postsRoute);

module.exports = router;