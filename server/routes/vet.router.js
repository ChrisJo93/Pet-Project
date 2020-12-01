const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryVet = `SELECT * FROM "vet"
      JOIN "pet" ON "vet".pet_id = "pet".id
      WHERE pet_id = $1;`;
  pool
    .query(queryVet, [req.params.id])
    .then((result) => {
      res.send(result.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error in get', err);
      res.sendStatus(500);
    });
});

router.post('/:id', rejectUnauthenticated, (req, res) => {
  const vet = req.body;
  const insertVetQuery = `INSERT INTO "vet" 
    ("doctor" , "reason" , "date", "location", "pet_id")
    VALUES ($1, $2, $3, $4, $5);`;
  pool
    .query(insertVetQuery, [
      vet.doctor,
      vet.reason,
      vet.date,
      vet.location,
      req.params.id,
    ])
    .then((result) => {
      console.log(result.rows);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in FOOD POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
