import { z } from 'zod';
import { urlOrPath } from './common.js';

export const teamMemberSchema = z.object({
  name: z.string().min(2),
  roleTitle: z.string().min(2),
  bio: z.string().optional().or(z.literal('')),
  photo: urlOrPath.optional().or(z.literal('')),
  order: z.number().int().optional(),
  published: z.boolean().optional()
});
