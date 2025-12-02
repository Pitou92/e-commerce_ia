const express = require('express');
const PokemonCard = require('../models/PokemonCard');

const router = express.Router();

// Petit helper pour transformer une carte Pokémon en "product" consommable par le frontend
function mapCardToProduct(card) {
  return {
    id: card.id,
    name: card.nom_carte,
    price: card.prix,
    // On fabrique une description simple à partir des infos disponibles
    description: `Carte Pokémon ${card.nom_carte} - rareté ${card.rarete || 'standard'}`,
    // On utilise la rareté comme catégorie afin de rester cohérent avec le frontend
    category: card.rarete || 'standard',
    // Champs supplémentaires potentiellement utiles pour le front
    imageUrl: card.url_image,
    stock: card.quantite_stock,
  };
}

// GET /api/products -> liste de tous les produits
router.get('/', async (req, res, next) => {
  try {
    const cards = await PokemonCard.find().lean();
    const products = cards.map(mapCardToProduct);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/:id -> un produit par son id métier
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await PokemonCard.findOne({ id }).lean();

    if (!card) {
      return res.status(404).json({ message: `Produit avec l'identifiant ${id} introuvable` });
    }

    const product = mapCardToProduct(card);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
