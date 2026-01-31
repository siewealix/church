import { Router } from 'express';
import {
  listEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateRequest } from '../middlewares/validate.js';
import { eventSchema } from '../validators/event.js';
import { paginationSchema, idSchema } from '../validators/common.js';

const router = Router();

/**
 * @openapi
 * /api/events:
 *   get:
 *     summary: List events
 *     tags: [Events]
 */
router.get('/', validateRequest(paginationSchema, 'query'), listEvents);
router.get('/:id', validateRequest(idSchema, 'params'), getEvent);
router.post('/', requireAuth, validateRequest(eventSchema), createEvent);
router.put('/:id', requireAuth, validateRequest(idSchema, 'params'), validateRequest(eventSchema), updateEvent);
router.delete('/:id', requireAuth, validateRequest(idSchema, 'params'), deleteEvent);

export default router;
