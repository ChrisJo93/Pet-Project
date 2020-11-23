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
  const queryGroomer = `SELECT 
  "groomer".groomer , "groomer".date , "pet".name FROM "groomer"
  JOIN "pet" ON "groomer".pet_id = "pet".id
  WHERE "groomer".pet_id = $1;`;
  pool
    .query(queryGroomer, [req.params.id])
    .then((result) => {
      console.log(req.params.id);
      console.log(result);
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
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
});

module.exports = router;
