import request from 'supertest';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../src/app.js';
import { connectDatabase } from '../src/config/db.js';
import User from '../src/models/User.js';

let mongoServer;
let token;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongoServer.getUri();
  process.env.JWT_SECRET = 'test-secret';
  await connectDatabase(process.env.MONGODB_URI);

  const passwordHash = await bcrypt.hash('admin123', 10);
  await User.create({ email: 'admin@tfmi.org', passwordHash, role: 'admin' });

  const loginRes = await request(app).post('/api/auth/login').send({
    email: 'admin@tfmi.org',
    password: 'admin123'
  });
  token = loginRes.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
  if (mongoServer) {
    await mongoServer.stop();
  }
});

test('creates and lists events', async () => {
  const createRes = await request(app)
    .post('/api/events')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Culte dominical',
      description: 'Célébration de louange et adoration.',
      date: '2024-08-04T09:00:00Z',
      location: 'TFMI Mbog Abang',
      image: 'https://example.com/image.jpg',
      published: true
    });

  expect(createRes.status).toBe(201);

  const listRes = await request(app).get('/api/events');
  expect(listRes.status).toBe(200);
  expect(listRes.body.items.length).toBe(1);
});
