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
  const queryPet = `SELECT * FROM "pet" WHERE user_id=${req.user.id};`;
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

router.post('/', rejectUnauthenticated, (req, res) => {
  //mmm, sweet dopamine
  const pet = req.body;
  const insertPetQuery = `
INSERT INTO "pet" 
("name", "species", "breed", "weight", "birthdate", "sex", "image", "microchip", "user_id")
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
  pool
    .query(insertPetQuery, [
      pet.name, //required
      pet.species, //required
      pet.breed,
      pet.weight,
      pet.birthdate,
      pet.sex,
      pet.image,
      pet.microchip,
      req.user.id, // required/ Using logged in user for User_ID
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
