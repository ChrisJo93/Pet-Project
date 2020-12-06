const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryMedication = `SELECT 
  "medication".id,
  "medication".brand,
  "medication".dosage,
  "medication".start_date,
  "medication".end_date,
  "medication".doctor,
  "medication".description,
  "medication".barcode,
  "medication".pet_id,
  "pet".name 

  FROM "medication"
  JOIN "pet" ON "medication".pet_id = "pet".id
  WHERE user_id = $1
`;
  pool
    .query(queryMedication, [req.user.id])
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
  const queryMedication = `SELECT 
  "medication".id,
  "medication".brand,
  "medication".dosage,
  "medication".start_date,
  "medication".end_date,
  "medication".doctor,
  "medication".description,
  "medication".barcode,
  "medication".pet_id,
  "pet".name

  FROM "medication"
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
    ("brand" , "dosage" , "start_date" , "end_date" , "doctor" , "description" ,  "barcode" , "pet_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  const medicationDetails = [
    medication.brand,
    medication.dosage,
    medication.start_date,
    medication.end_date,
    medication.doctor,
    medication.description,
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
      console.log('Error in medication POST', error);
      res.sendStatus(500);
    });
});

router.put('/editMedication/:id', rejectUnauthenticated, (req, res) => {
  const meds = req.body;
  const editMedicationQuery = `UPDATE medication 
  SET 
  brand=$1, 
  dosage=$2,
  start_date=$3,
  end_date=$4,
  doctor=$5,
  description=$6,
  barcode=$7  
  WHERE id=$8;`;
  pool
    .query(editMedicationQuery, [
      meds.brand,
      meds.dosage,
      meds.start_date,
      meds.end_date,
      meds.doctor,
      meds.description,
      meds.barcode,
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
  const deleteMedicationQuery = `DELETE FROM "medication" WHERE "id"=$1;`;
  pool
    .query(deleteMedicationQuery, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
