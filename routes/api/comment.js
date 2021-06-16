const router = require("express").Router();
const { Comment } = require('../../models');

// Matches with "/api/comment"
router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                blog_id: req.body.blog_id
            }
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.content,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;