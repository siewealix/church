export const validateRequest = (schema, location = 'body') => (req, res, next) => {
  const data = req[location];
  const result = schema.safeParse(data);

  if (!result.success) {
    return res.status(400).json({
      message: 'Validation error',
      errors: result.error.flatten().fieldErrors
    });
  }

  req[location] = result.data;
  return next();
};
