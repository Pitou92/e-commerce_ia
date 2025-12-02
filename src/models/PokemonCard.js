const { Schema, model } = require('mongoose');

const PokemonCardSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nom_carte: {
      type: String,
      required: true,
      trim: true,
    },
    prix: {
      type: Number,
      required: true,
      min: 0,
    },
    quantite_stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    url_image: {
      type: String,
      trim: true,
    },
    rarete: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('PokemonCard', PokemonCardSchema);
