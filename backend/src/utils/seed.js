import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectDatabase } from '../config/db.js';
import User from '../models/User.js';
import Event from '../models/Event.js';
import Sermon from '../models/Sermon.js';
import Post from '../models/Post.js';
import Ministry from '../models/Ministry.js';
import TeamMember from '../models/TeamMember.js';
import GalleryItem from '../models/GalleryItem.js';

dotenv.config();

const seed = async () => {
  await connectDatabase(process.env.MONGODB_URI);

  await Promise.all([
    User.deleteMany({}),
    Event.deleteMany({}),
    Sermon.deleteMany({}),
    Post.deleteMany({}),
    Ministry.deleteMany({}),
    TeamMember.deleteMany({}),
    GalleryItem.deleteMany({})
  ]);

  const passwordHash = await bcrypt.hash('admin123', 10);
  await User.create({
    email: 'admin@tfmi.org',
    passwordHash,
    role: 'admin'
  });

  await Event.create([
    {
      title: 'Culte Dominical de Louange',
      description: "Un temps de célébration et d'enseignement pour toute la communauté.",
      date: new Date('2024-08-04T09:00:00Z'),
      location: 'TFMI Mbog Abang, Yaoundé',
      image: '/assets/community.svg',
      published: true
    },
    {
      title: 'Veillée de Prière',
      description: 'Soirée de prière et intercession pour les familles.',
      date: new Date('2024-08-09T18:00:00Z'),
      location: 'TFMI Santa Barbara',
      image: '/assets/hero.svg',
      published: true
    }
  ]);

  await Sermon.create([
    {
      title: 'Ensemble vers la victoire en Christ',
      preacher: 'Apôtre Julius EKIE',
      date: new Date('2024-07-21T09:00:00Z'),
      description: 'Un message de foi sur le triomphe en Christ.',
      mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      notes: 'Colossiens 2:15, Romains 8:37',
      published: true
    }
  ]);

  await Post.create([
    {
      title: 'Annonce : Programme de Jeûne',
      content: 'Rejoignez-nous pour 7 jours de consécration et de prière.',
      coverImage: '/assets/prayer.svg',
      tags: ['prière', 'annonces'],
      published: true
    }
  ]);

  await Ministry.create([
    {
      name: "Culte d'Adoration",
      description: 'Louer Dieu avec passion et excellence.',
      leader: 'Pasteur Marie',
      schedule: 'Dimanche 09:00 - 12:00',
      image: '/assets/ministry.svg',
      published: true
    },
    {
      name: 'École Biblique',
      description: 'Formation spirituelle et discipulat.',
      leader: 'Pasteur Pierre',
      schedule: 'Jeudi 18:30 - 20:30',
      image: '/assets/ministry.svg',
      published: true
    }
  ]);

  await TeamMember.create([
    {
      name: 'Apôtre Julius EKIE',
      roleTitle: 'Fondateur',
      bio: "Fondateur et visionnaire de TFMI.",
      photo: '/assets/pastor-apostle.svg',
      order: 1,
      published: true
    },
    {
      name: 'Pasteur Pierre',
      roleTitle: 'Enseignement biblique',
      bio: "Responsable de l'enseignement biblique.",
      photo: '/assets/pastor-apostle.svg',
      order: 2,
      published: true
    },
    {
      name: 'Pasteur Marie',
      roleTitle: 'Louange',
      bio: 'En charge du ministère de la louange.',
      photo: '/assets/pastor-apostle.svg',
      order: 3,
      published: true
    }
  ]);

  await GalleryItem.create([
    {
      title: 'Communauté en louange',
      imageUrl: '/assets/community.svg',
      published: true
    },
    {
      title: 'Moments de prière',
      imageUrl: '/assets/prayer.svg',
      published: true
    }
  ]);

  console.log('Seed completed');
  process.exit(0);
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
