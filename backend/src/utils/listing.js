import { buildPagination } from './pagination.js';

export const listDocuments = async ({ model, page, limit, published, sort = '-createdAt' }) => {
  const query = {};
  if (typeof published === 'boolean') {
    query.published = published;
  }
  const { skip } = buildPagination({ page, limit });

  const [items, total] = await Promise.all([
    model.find(query).sort(sort).skip(skip).limit(limit),
    model.countDocuments(query)
  ]);

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
