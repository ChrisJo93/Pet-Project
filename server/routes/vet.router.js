const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryVet = `SELECT
  "vet".id,
  "vet".doctor,
  "vet".reason,
  "vet".date,
  "vet".location,
  "vet".pet_id,
  "pet".name

  FROM "vet"
  JOIN "pet" ON "vet".pet_id = "pet".id
  WHERE user_id = $1`;
  pool
    .query(queryVet, [req.user.id])
    .then((result) => {
      res.send(result.rows);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error in get', err);
      res.sendStatus(500);
    });
});

router.get('/details/:id', rejectUnauthenticated, (req, res) => {
  const queryVet = `SELECT 
  "vet".id,
  "vet".doctor,
  "vet".reason,
  "vet".date,
  "vet".location,
  "vet".pet_id,
  "pet".name
  
  FROM "vet"
  JOIN "pet" ON "vet".pet_id = "pet".id
  WHERE "vet".pet_id = $1;`;
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

router.put('/editVet/:id', rejectUnauthenticated, (req, res) => {
  const vet = req.body;
  const editVetQuery = `UPDATE vet 
  SET 
  doctor=$1, 
  reason=$2,
  date=$3,
  location=$4  
  WHERE id=$5;`;
  pool
    .query(editVetQuery, [
      vet.doctor,
      vet.reason,
      vet.date,
      vet.location,
      req.params.id,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const deleteVetQuery = `DELETE FROM "vet" WHERE "id"=$1;`;
  pool
    .query(deleteVetQuery, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
