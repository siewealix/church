import { z } from 'zod';
import { urlOrPath } from './common.js';

export const postSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(10),
  coverImage: urlOrPath.optional().or(z.literal('')),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional()
});
