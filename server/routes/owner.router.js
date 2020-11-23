const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log(req.user);
  const queryOwner = `SELECT * user WHERE "id" = $1;`;
  pool.query(queryOwner, [req.user.user]);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
