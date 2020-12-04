const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryPet = `SELECT * FROM "pet" WHERE user_id=$1;`;
  //Query based on userID. Users will only see their pets
  pool
    .query(queryPet, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in pet GET', error);
      res.sendStatus(500);
    });
});

//Selects one pet based on petID
router.get('/details/:id', rejectUnauthenticated, (req, res) => {
  const queryPetID = `SELECT * FROM "pet" WHERE id=$1;`;
  pool
    .query(queryPetID, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in id pet get', error);
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
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in pet POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
