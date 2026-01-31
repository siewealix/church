import { Router } from 'express';
import {
  listGalleryItems,
  getGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
} from '../controllers/galleryController.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateRequest } from '../middlewares/validate.js';
import { gallerySchema } from '../validators/gallery.js';
import { paginationSchema, idSchema } from '../validators/common.js';

const router = Router();

/**
 * @openapi
 * /api/gallery:
 *   get:
 *     summary: List gallery items
 *     tags: [Gallery]
 */
router.get('/', validateRequest(paginationSchema, 'query'), listGalleryItems);
router.get('/:id', validateRequest(idSchema, 'params'), getGalleryItem);
router.post('/', requireAuth, validateRequest(gallerySchema), createGalleryItem);
router.put('/:id', requireAuth, validateRequest(idSchema, 'params'), validateRequest(gallerySchema), updateGalleryItem);
router.delete('/:id', requireAuth, validateRequest(idSchema, 'params'), deleteGalleryItem);

export default router;
