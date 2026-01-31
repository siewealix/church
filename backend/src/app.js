import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import sermonRoutes from './routes/sermons.js';
import postRoutes from './routes/posts.js';
import ministryRoutes from './routes/ministries.js';
import teamRoutes from './routes/team.js';
import galleryRoutes from './routes/gallery.js';
import contactRoutes from './routes/contact.js';
import uploadRoutes from './routes/uploads.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import { swaggerSpec } from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    credentials: true
  })
);
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

const uploadsPath = path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads');
app.use(`/${process.env.UPLOAD_DIR || 'uploads'}`, express.static(uploadsPath));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/sermons', sermonRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/ministries', ministryRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/uploads', uploadRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
