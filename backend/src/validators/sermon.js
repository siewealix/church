import { z } from 'zod';

export const sermonSchema = z.object({
  title: z.string().min(2),
  preacher: z.string().min(2),
  date: z.coerce.date(),
  description: z.string().min(10),
  mediaUrl: z.string().url().optional().or(z.literal('')),
  notes: z.string().optional().or(z.literal('')),
  published: z.boolean().optional()
});
