const express = require('express');
const router = express.Router();

const Posts = require('../../models/Posts');

router.get('/', async(req, res) => {
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No Items');
        res.status(200).json(posts);
    }catch(err){
        res.status(400).json({ msg: err })
    }
});

module.exports = router;