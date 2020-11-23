const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryPet = `SELECT "pet".id FROM "pet"
  WHERE "pet".user_id = $1;`;
  const userID = req.user.id;
  console.log('look here', userID);

  pool
    .query(queryPet, [userID])
    .then((petResult) => {
      //only pets of logged in user
      const queryGroomer = `SELECT * 
  FROM "groomer" 
  WHERE pet_id = $1;`;
      console.log('important', petResult.rows[0].id);
      pool
        .query(queryGroomer, [petResult.rows])
        .then((groomerResult) => {
          const petGroomer = groomerResult.rows;
          res.send(petGroomer);
        })
        .catch((error) => {
          console.log('problem in groomer get', error);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
