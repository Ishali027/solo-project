const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    const idToGet = req.params.id;
    const user_id = req.user.id;
    console.log('idToGet', idToGet);
    console.log('user_id', user_id);

    const sqlText = `SELECT "user".customer_name, orders.total, meat.type FROM "user" 
    JOIN orders ON "user".id = orders.user_id JOIN line_items ON orders.id = line_items.order_id 
    JOIN meat ON line_items.meat_id = meat.id
    WHERE "user".id = $1 AND orders.id = $2;
    `;
    const sqlValues = [user_id, idToGet];
    pool.query(sqlQuery, sqlValues)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error GETting receipt', error);
            res.sendStatus(500);
        })
});


router.post('/', (req, res) => {
});

module.exports = router;