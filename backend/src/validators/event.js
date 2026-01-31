import { z } from 'zod';
import { urlOrPath } from './common.js';

export const eventSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  date: z.coerce.date(),
  location: z.string().min(2),
  image: urlOrPath.optional().or(z.literal('')),
  published: z.boolean().optional()
});
