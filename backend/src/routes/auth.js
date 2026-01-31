import { Router } from 'express';
import { login } from '../controllers/authController.js';
import { validateRequest } from '../middlewares/validate.js';
import { loginSchema } from '../validators/auth.js';
import { authLimiter } from '../middlewares/rateLimit.js';

const router = Router();

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Admin login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged in
 */
router.post('/login', authLimiter, validateRequest(loginSchema), login);

export default router;
