const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryMedication = `SELECT * FROM "medication"
      JOIN "pet" ON "medication".pet_id = "pet".id
      WHERE "medication".pet_id = $1;`;
  pool
    .query(queryMedication, [req.params.id])
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
  const medication = req.body;
  const insertMedicationQuery = `INSERT INTO "medication" 
    ("name" , "dosage" , "start_date" , "end_date" , "doctor" , "barcode" , "pet_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  const medicationDetails = [
    medication.name,
    medication.dosage,
    medication.start_date,
    medication.end_date,
    medication.doctor,
    medication.barcode,
    req.params.id,
  ];
  pool
    .query(insertMedicationQuery, medicationDetails)
    .then((result) => {
      console.log(result.rows);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in FOOD POST', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const deleteMedicationQuery = `DELETE FROM "medication" WHERE "id" =$1;`;
  const medicationID = [req.params.id];
  pool
    .query(deleteMedicationQuery, medicationID)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
