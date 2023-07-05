const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM orders;`;
    pool.query(sqlText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('error GETting orders', err);
            res.sendStatus(500);
        })

})


router.post('/', async (req,res) =>{
    
})














module.exports = router;