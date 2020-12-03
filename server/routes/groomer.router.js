const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryGroomer = `SELECT 
  "groomer".groomer,
  "groomer".date,
  "groomer".location,
  "groomer".id,
  "groomer".pet_id,
  "pet".name
  
  FROM "groomer"
  JOIN "pet" ON "groomer".pet_id = "pet".id
  WHERE user_id = $1
`;
  pool
    .query(queryGroomer, [req.user.id])
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
  const queryGroomer = `SELECT 
  "groomer".groomer,
  "groomer".date,
  "groomer".location,
  "groomer".id,
  "groomer".pet_id,
  "pet".name

  FROM "groomer"
  JOIN "pet" ON "groomer".pet_id = "pet".id
  WHERE "groomer".pet_id = $1;`;
  pool
    .query(queryGroomer, [req.params.id])
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
  //inserting pet_id into groomer table
  const groomer = req.body;
  const insertGroomerQuery = `
  INSERT INTO "groomer" 
  ("groomer", "date", "location", "pet_id")
  VALUES ($1, $2, $3, $4);`;
  pool
    .query(insertGroomerQuery, [
      groomer.groomer,
      groomer.date,
      groomer.location,
      req.params.id,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in groomer POST', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const deleteGroomerQuery = `DELETE FROM "groomer" WHERE "id" =$1;`;
  pool
    .query(deleteGroomerQuery, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.put('/editGroomer/:id', rejectUnauthenticated, (req, res) => {
  const editGroomerQuery = `UPDATE groomer 
  SET 
  groomer=$1, 
  date=$2, 
  location=$3
   WHERE id=$4;`;
  pool
    .query(editGroomerQuery, [
      req.body.groomer,
      req.body.date,
      req.body.location,
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

module.exports = router;
