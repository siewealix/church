import { z } from 'zod';
import { urlOrPath } from './common.js';

export const ministrySchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  leader: z.string().min(2),
  schedule: z.string().optional().or(z.literal('')),
  image: urlOrPath.optional().or(z.literal('')),
  published: z.boolean().optional()
});
