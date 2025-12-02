const express = require('express');
const PokemonCard = require('../models/PokemonCard');

const router = express.Router();

// GET /api/cards -> list all cards
router.get('/', async (req, res, next) => {
  try {
    const cards = await PokemonCard.find().lean();
    res.json(cards);
  } catch (error) {
    next(error);
  }
});

// GET /api/cards/:id -> fetch a single card by business id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await PokemonCard.findOne({ id }).lean();

    if (!card) {
      return res.status(404).json({ message: `Carte avec l'identifiant ${id} introuvable` });
    }

    res.json(card);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
