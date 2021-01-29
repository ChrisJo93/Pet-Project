const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/med/:id', rejectUnauthenticated, (req, res) => {
  const barcode = req.body;
  const insertMedBarcodeQuery = `INSERT INTO "medication" 
    ("brand" , "start_date", "end_date", "description", "barcode" , "pet_id")
    VALUES ($1, $2, $3, $4, $5, $6);`;
  pool
    .query(insertMedBarcodeQuery, [
      barcode.brand,
      barcode.added_time,
      barcode.modified_time,
      barcode.title,
      barcode.barcode,
      req.params.id,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in barcode POST', error);
      res.sendStatus(500);
    });
});

router.post('/food/:id', rejectUnauthenticated, (req, res) => {
  const barcode = req.body;
  const insertFoodBarcodeQuery = `INSERT INTO "food"
    ("brand" , "barcode" , "pet_id")
    VALUES ($1, $2, $3 );`;
  pool
    .query(insertFoodBarcodeQuery, [
      barcode.title,
      barcode.barcode,
      req.params.id,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in barcode POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
