import request from 'supertest';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../src/app.js';
import { connectDatabase } from '../src/config/db.js';
import User from '../src/models/User.js';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongoServer.getUri();
  process.env.JWT_SECRET = 'test-secret';
  await connectDatabase(process.env.MONGODB_URI);

  const passwordHash = await bcrypt.hash('admin123', 10);
  await User.create({ email: 'admin@tfmi.org', passwordHash, role: 'admin' });
});

afterAll(async () => {
  await mongoose.connection.close();
  if (mongoServer) {
    await mongoServer.stop();
  }
});

test('logs in admin with valid credentials', async () => {
  const response = await request(app).post('/api/auth/login').send({
    email: 'admin@tfmi.org',
    password: 'admin123'
  });

  expect(response.status).toBe(200);
  expect(response.body.token).toBeTruthy();
  expect(response.body.user.email).toBe('admin@tfmi.org');
});
