import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { createAccessToken } from '../utils/token.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const matches = await bcrypt.compare(password, user.passwordHash);
    if (!matches) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = createAccessToken({ id: user._id, role: user.role });

    return res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    return next(error);
  }
};
