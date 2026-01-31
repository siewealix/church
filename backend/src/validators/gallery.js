import { z } from 'zod';
import { urlOrPath } from './common.js';

export const gallerySchema = z.object({
  title: z.string().min(2),
  imageUrl: urlOrPath,
  published: z.boolean().optional()
});
