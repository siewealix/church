import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import { validateRequest } from '../middlewares/validate.js';
import { contactSchema } from '../validators/contact.js';

const router = Router();

/**
 * @openapi
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contact]
 */
router.post('/', validateRequest(contactSchema), submitContact);

export default router;
