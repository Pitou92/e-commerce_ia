require('dotenv').config();

const mongoose = require('mongoose');
const PokemonCard = require('../src/models/PokemonCard');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokemon_shop';

const seedData = [
  {
    id: 'PKMN-001',
    nom_carte: 'Pikachu Classique',
    prix: 9.99,
    quantite_stock: 50,
    url_image: 'https://example.com/images/pikachu.jpg',
    rarete: 'commune',
  },
  {
    id: 'PKMN-002',
    nom_carte: 'Dracaufeu Holographique',
    prix: 149.99,
    quantite_stock: 5,
    url_image: 'https://example.com/images/charizard.jpg',
    rarete: 'ultra rare',
  },
  {
    id: 'PKMN-003',
    nom_carte: 'Mewtwo Edition 1',
    prix: 89.5,
    quantite_stock: 12,
    url_image: 'https://example.com/images/mewtwo.jpg',
    rarete: 'rare',
  },
  {
    id: 'PKMN-004',
    nom_carte: 'Evoli Evolutions Pack',
    prix: 29.99,
    quantite_stock: 30,
    url_image: 'https://example.com/images/eevee.jpg',
    rarete: 'commune',
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connexion MongoDB OK, nettoyage de la collection...');

    await PokemonCard.deleteMany({});
    const result = await PokemonCard.insertMany(seedData);

    console.log(`${result.length} cartes inserees avec succes.`);
  } catch (error) {
    console.error('Erreur lors du seed :', error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log('Connexion MongoDB fermee.');
  }
}

seed();
