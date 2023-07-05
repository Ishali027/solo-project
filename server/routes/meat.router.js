const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `SELECT * FROM meat;`;
  pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR GETting meat', err);
        res.sendStatus(500);
    })
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;