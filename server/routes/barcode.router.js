const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/:id', rejectUnauthenticated, (req, res) => {
  const barcode = req.body;
  const insertBarcodeQuery = `INSERT INTO "medication" 
    ("brand" , "start_date", "end_date", "description", "barcode" , "pet_id")
    VALUES ($1, $2, $3, $4, $5, $6);`;
  pool
    .query(insertBarcodeQuery, [
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

module.exports = router;
