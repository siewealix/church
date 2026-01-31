import Post from '../models/Post.js';
import { listDocuments } from '../utils/listing.js';

export const listPosts = async (req, res, next) => {
  try {
    const { page, limit, published } = req.query;
    const data = await listDocuments({ model: Post, page, limit, published, sort: '-createdAt' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.json(post);
  } catch (error) {
    return next(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.json(post);
  } catch (error) {
    return next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
