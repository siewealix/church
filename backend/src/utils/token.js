import jwt from 'jsonwebtoken';

export const createAccessToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
