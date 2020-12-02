const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryFood = `SELECT "food".id, 
  "food".brand, 
  "food".barcode, 
  "food".pet_id,
  "pet".name
  FROM "food"
    JOIN "pet" ON "food".pet_id = "pet".id
    WHERE "food".pet_id = $1;`;
  pool
    .query(queryFood, [req.params.id])
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
  const food = req.body;
  const insertFoodQuery = `INSERT INTO "food" 
  ("brand" , "barcode" , "pet_id")
  VALUES ($1, $2, $3);`;
  pool
    .query(insertFoodQuery, [food.brand, food.barcode, req.params.id])
    .then((result) => {
      console.log(result.rows);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in FOOD POST', error);
      res.sendStatus(500);
    });
});

router.put('/editFood/:id', rejectUnauthenticated, (req, res) => {
  const editFoodQuery = `UPDATE food SET brand=$1, barcode=$2  WHERE id=$3;`;
  pool
    .query(editFoodQuery, [req.body.brand, req.body.barcode, req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const deleteFoodQuery = `DELETE FROM "food" WHERE "food".id=$1;`;
  const foodID = [req.params.id];
  pool
    .query(deleteFoodQuery, foodID)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
