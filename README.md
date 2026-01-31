# TFMI

Refonte complète du site de Triumphant Faith Ministries International (TFMI) en stack MERN avec un **frontend React** et un **backend Node/Express et MongoDB**.

## Fonctionnalités

### Frontend
- Accueil avec hero, présentation, CTA, prochains événements, dernier sermon, actualités, infos pratiques.
- Pages : À propos, Ministères, Événements (liste et détail), Sermons (liste et détail), Galerie, Actualités, Contact, Don.
- Design responsive, accessible et SEO-friendly (React Helmet Async).

### Admin
- Authentification JWT.
- Dashboard.
- CRUD complet : événements, sermons, annonces, ministères, équipe, galerie.
- Publication/dépublication.
- Upload d’images via endpoint `/api/uploads` (stockage local).

### Backend
- Express, MongoDB et Mongoose.
- Validation des données avec Zod.
- Gestion d’erreurs centralisée.
- CORS configuré.
- Rate limiting pour l’auth.
- Sécurité de base (Helmet).
- Documentation API Swagger.
- Tests API (Jest et Supertest) : auth et CRUD événements.

## Structure
```
backend/
  src/
    config/
    controllers/
    middlewares/
    models/
    routes/
    utils/
    validators/
frontend/
  src/
    api/
    components/
    hooks/
    pages/
    routes/
    styles/
```

## Prérequis
- Node.js 18+ 
- MongoDB local ou via Docker

## Installation

### 1) Cloner et installer
```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

### 2) Configurer les environnements
Créer les fichiers `.env` à partir des exemples :

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

#### Exemple `.env` backend
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tfmi
JWT_SECRET=change_me
CORS_ORIGIN=http://localhost:5173
UPLOAD_DIR=uploads
```

#### Exemple `.env` frontend
```
VITE_API_URL=http://localhost:5000
```

### 3) Lancer en développement
```bash
npm run dev
```

Ou séparément :
```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

## Tests
```bash
npm --prefix backend test
```

## Seed (données de démonstration)
```bash
npm --prefix backend run seed
```

**Admin par défaut**
- Email: `admin@tfmi.org`
- Mot de passe: `admin123`

>  Pensez à changer ce mot de passe en production.

## Documentation API
Swagger est disponible sur :
```
http://localhost:5000/api/docs
```

## Production
Frontend :
```bash
npm --prefix frontend run build
```

Backend :
```bash
npm --prefix backend run start
```

## Docker
Un `docker-compose.yml` est fourni pour lancer MongoDB + backend.

```bash
docker compose up --build
```

## Sécurité & bonnes pratiques
- Authentification JWT.
- Rate limiting sur la route login.
- Validation Zod sur toutes les routes sensibles.
- Headers sécurisés via Helmet.
- CORS configurable.

## Notes
- Les visuels par défaut sont des SVG dans `/frontend/public/assets` pour éviter les fichiers binaires.
- Le lien de don externe peut être configuré dans la page Don.
