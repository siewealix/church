import { Router } from 'express';
import {
  listSermons,
  getSermon,
  createSermon,
  updateSermon,
  deleteSermon
} from '../controllers/sermonController.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateRequest } from '../middlewares/validate.js';
import { sermonSchema } from '../validators/sermon.js';
import { paginationSchema, idSchema } from '../validators/common.js';

const router = Router();

/**
 * @openapi
 * /api/sermons:
 *   get:
 *     summary: List sermons
 *     tags: [Sermons]
 */
router.get('/', validateRequest(paginationSchema, 'query'), listSermons);
router.get('/:id', validateRequest(idSchema, 'params'), getSermon);
router.post('/', requireAuth, validateRequest(sermonSchema), createSermon);
router.put('/:id', requireAuth, validateRequest(idSchema, 'params'), validateRequest(sermonSchema), updateSermon);
router.delete('/:id', requireAuth, validateRequest(idSchema, 'params'), deleteSermon);

export default router;
