# Backend e-commerce IA

Documentation technique pour l'API Node.js/Express + MongoDB (Mongoose) utilisée par le projet e-commerce.

## Stack & objectifs

- **Node.js / Express 5** : serveur HTTP et gestion des routes REST.
- **MongoDB + Mongoose 9** : stockage des cartes Pokémon avec validations.
- **Docker** : orchestration locale (API + base) via `docker compose`.
- **dotenv** : gestion des variables d'environnement.

Le backend expose actuellement des endpoints statiques et la lecture (Read) du catalogue.

## Structure principale

```
src/
├── app.js              # configuration d'Express, routes statiques, middleware
├── server.js           # bootstrap (dotenv, connexion Mongo, lancement HTTP)
├── models/
│   └── PokemonCard.js  # schéma Mongoose
└── routes/
    └── pokemonCards.js # endpoints de lecture
scripts/
└── seed.js             # population de la base
```

## Variables d'environnement

| Nom | Description | Valeur par défaut |
| --- | --- | --- |
| `PORT` | Port HTTP de l'API | `3000` |
| `MONGODB_URI` | URI de connexion MongoDB | `mongodb://localhost:27017/pokemon_shop` |

Créer votre fichier `.env` à partir de `.env.example`.

## Commandes npm

| Commande | Rôle |
| --- | --- |
| `npm start` | Lance l'API (nécessite l'accès à Mongo). |
| `npm run seed` | Vide `pokemoncards` puis insère 4 cartes de démonstration. |

## Docker / Compose

```
docker compose up --build          # build et lancement API + Mongo
docker compose up -d               # lancement en arrière-plan
docker compose down                # arrêt + suppression des conteneurs

docker compose run --rm api npm run seed  # seed dans l'environnement conteneurisé
```

Le service `mongo` expose `localhost:27017` (volume persistant `mongo_data`). L'API réémet le port `3000`.

## Modèle PokemonCard

```js
{
  id: String,               // requis, unique
  nom_carte: String,        // requis
  prix: Number,             // requis, >= 0
  quantite_stock: Number,   // défaut 0, >= 0
  url_image: String,
  rarete: String
}
```

## Routes exposées

| Méthode | Chemin | Description |
| --- | --- | --- |
| `GET` | `/` | Message de bienvenue. |
| `GET` | `/health` | Pong + horodatage ISO. |
| `GET` | `/about` | Métadonnées projet. |
| `GET` | `/api/cards` | Liste toutes les cartes Pokémon. |
| `GET` | `/api/cards/:id` | Récupère une carte selon son `id` métier. |

### Exemple `curl`

```
# Lister toutes les cartes
curl http://localhost:3000/api/cards

# Récupérer la carte PKMN-001
curl http://localhost:3000/api/cards/PKMN-001

# Statut de l'API
curl http://localhost:3000/health
```

## Flux de démarrage recommandé

1. Copier `.env.example` en `.env` et ajuster `MONGODB_URI`.
2. Lancer MongoDB (local ou `docker compose up mongo`).
3. Installer les dépendances : `npm install`.
4. (Optionnel) seed : `npm run seed`.
5. Démarrer l'API : `npm start` (ou `docker compose up`).
6. Tester via `curl` ou tout autre client HTTP.

## Ajouts futurs

- Étendre le CRUD (création, mise à jour, suppression) et ajouter une validation côté routes.
- Authentification/autorisation si nécessaire pour l'administration du stock.
- Tests automatisés (ex. Jest + Supertest) pour sécuriser les endpoints.
