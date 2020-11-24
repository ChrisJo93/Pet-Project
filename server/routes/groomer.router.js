const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  //Grabbing groomer by pet ID
  //the way this is written the other groomers can be accessed but
  //it wont matter client side where only that user's pets are visible
  const queryGroomer = `SELECT 
  "groomer".groomer , "groomer".date , "pet".name FROM "groomer"
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

/**
 * POST route template
 */
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
  const groomerID = [req.params.id];
  pool
    .query(deleteGroomerQuery, groomerID)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
