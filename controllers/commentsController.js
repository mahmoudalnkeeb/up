const Article = require('../models/article');
const Post = require('../models/post');
const Comment = require('../models/comment');
let articles = new Article();
let posts = new Post();
let comments = new Comment();

class CommentController {
  async newComment(comment, content_id, user_id) {}
  async getCommentsById(id) {}
  async upComment(id) {}
  async replay(id) {}
  async getCommentsById(id) {}
  async editComment(id, newComment) {}
  async deleteComment(id) {}
}

module.exports = CommentController;
