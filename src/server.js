require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokemon_shop';

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connexion MongoDB reussie');

    app.listen(PORT, () => {
      console.log(`API e-commerce IA demarree sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('Echec de connexion a MongoDB', error);
    process.exit(1);
  }
}

startServer();
