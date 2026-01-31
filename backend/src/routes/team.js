import { Router } from 'express';
import {
  listTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/teamMemberController.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateRequest } from '../middlewares/validate.js';
import { teamMemberSchema } from '../validators/teamMember.js';
import { paginationSchema, idSchema } from '../validators/common.js';

const router = Router();

/**
 * @openapi
 * /api/team:
 *   get:
 *     summary: List team members
 *     tags: [Team]
 */
router.get('/', validateRequest(paginationSchema, 'query'), listTeamMembers);
router.get('/:id', validateRequest(idSchema, 'params'), getTeamMember);
router.post('/', requireAuth, validateRequest(teamMemberSchema), createTeamMember);
router.put('/:id', requireAuth, validateRequest(idSchema, 'params'), validateRequest(teamMemberSchema), updateTeamMember);
router.delete('/:id', requireAuth, validateRequest(idSchema, 'params'), deleteTeamMember);

export default router;
