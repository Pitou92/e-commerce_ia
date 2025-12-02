# e-commerce_ia

School project: creating an e-commerce website using AI.

Pour la documentation détaillée du backend (stack, routes, commandes), voir `docs/backend.md`.

## Demarrage rapide

1. Dupliquer le fichier `.env.example` en `.env` et ajuster les variables si besoin (par defaut Mongo tourne sur `mongodb://localhost:27017/pokemon_shop`).
2. Installer les dependances puis lancer le serveur :

```bash
npm install
npm start
```

L'API Express repond sur `http://localhost:3000`.

## Seed de quelques cartes

- Localement (Mongo doit tourner sur la valeur de `MONGODB_URI`) :

```bash
npm run seed
```

- Via Docker (assure-toi que le service `mongo` est demarre, par ex. `docker compose up -d mongo`) :

```bash
docker compose run --rm api npm run seed
```

Le script vide la collection `pokemoncards` puis insere quatre cartes de demo.

## Utilisation avec Docker

Lancer l'API et MongoDB via Docker Compose :

```bash
docker compose up --build
```

Les services exposes :

- API : http://localhost:3000 (variable `PORT`)
- MongoDB : localhost:27017 (volume persistant `mongo_data`)

Pour arreter et supprimer les conteneurs :

```bash
docker compose down
```
