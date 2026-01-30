const express = require('express');

const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth");

const postsRoutes = express.Router();

postsRoutes.get('/posts', postsController.ListarPosts);
postsRoutes.post('/cadastrar/post', validate);

module.exports = postsRoutes;

