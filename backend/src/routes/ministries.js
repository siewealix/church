import { Router } from 'express';
import {
  listMinistries,
  getMinistry,
  createMinistry,
  updateMinistry,
  deleteMinistry
} from '../controllers/ministryController.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateRequest } from '../middlewares/validate.js';
import { ministrySchema } from '../validators/ministry.js';
import { paginationSchema, idSchema } from '../validators/common.js';

const router = Router();

/**
 * @openapi
 * /api/ministries:
 *   get:
 *     summary: List ministries
 *     tags: [Ministries]
 */
router.get('/', validateRequest(paginationSchema, 'query'), listMinistries);
router.get('/:id', validateRequest(idSchema, 'params'), getMinistry);
router.post('/', requireAuth, validateRequest(ministrySchema), createMinistry);
router.put('/:id', requireAuth, validateRequest(idSchema, 'params'), validateRequest(ministrySchema), updateMinistry);
router.delete('/:id', requireAuth, validateRequest(idSchema, 'params'), deleteMinistry);

export default router;
