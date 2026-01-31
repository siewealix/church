import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  published: z.coerce.boolean().optional()
});

export const idSchema = z.object({
  id: z.string().min(1)
});

export const urlOrPath = z
  .string()
  .refine((value) => value.startsWith('/') || /^https?:\/\//.test(value), {
    message: 'Must be a URL or a relative path'
  });
