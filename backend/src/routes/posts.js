import { Router } from 'express';
import {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} from '../controllers/postController.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateRequest } from '../middlewares/validate.js';
import { postSchema } from '../validators/post.js';
import { paginationSchema, idSchema } from '../validators/common.js';

const router = Router();

/**
 * @openapi
 * /api/posts:
 *   get:
 *     summary: List posts
 *     tags: [Posts]
 */
router.get('/', validateRequest(paginationSchema, 'query'), listPosts);
router.get('/:id', validateRequest(idSchema, 'params'), getPost);
router.post('/', requireAuth, validateRequest(postSchema), createPost);
router.put('/:id', requireAuth, validateRequest(idSchema, 'params'), validateRequest(postSchema), updatePost);
router.delete('/:id', requireAuth, validateRequest(idSchema, 'params'), deletePost);

export default router;
