const router = require("express").Router();
const { Blog } = require('../../models');

// Matches with "/api/post"
router.get("/", async (req, res) => {
    try {
        const postData = await Blog.findAll({});
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Blog.findByPk(req.params.id, {});    
        if (!postData) {
            res.status(404).json({ message: 'no post with that id'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const postData = await Blog.create({
            title: req.body.title,
            content: req.body.content,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;