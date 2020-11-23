const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryPet = `SELECT * FROM "pet" ORDER BY "id";`;
  pool
    .query(queryPet)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in pet GET', error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */

router.post('/', rejectUnauthenticated, (req, res) => {
  const pet = req.body;
  console.log('HEY THIS IS IMPORTANT', req.user.id);
  const insertPetQuery = `
INSERT INTO "pet" 
("name", "species", "breed", "weight", "birthdate", "sex", "image", "microchip", "user_id")
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
  pool
    .query(insertPetQuery, [
      pet.name,
      pet.species,
      pet.breed,
      pet.weight,
      pet.birthdate,
      pet.sex,
      pet.image,
      pet.microchip,
      req.user.id,
    ])
    .then((result) => {
      console.log('new pet:', result.rows);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in pet POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
