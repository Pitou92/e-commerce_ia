const express = require('express');
const pokemonCardsRouter = require('./routes/pokemonCards');

const app = express();

// Basic middleware setup for JSON payloads
app.use(express.json());

// Static informational endpoints
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API e-commerce IA" });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/about', (req, res) => {
  res.json({
    project: 'e-commerce_ia',
    description: 'API Express pour boutique de cartes Pokemon',
    version: '1.0.0',
  });
});

// Read-only Pokemon cards endpoints
app.use('/api/cards', pokemonCardsRouter);

// Generic error handler
app.use((err, req, res, next) => {
  console.error('Erreur API', err);
  res.status(500).json({ message: 'Une erreur est survenue, veuillez reessayer plus tard.' });
});

module.exports = app;
