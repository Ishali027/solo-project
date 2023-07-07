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


router.post('/', async (req,res) => { 
    const client = await pool.connect();
    console.log(req.body)
    const user_id = req.user.id;
    console.log(user_id);
    try {
        const {
            total,
            meats,
            completion_status
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "orders" ("total", "user_id" )
        VALUES ($1, $2)
        RETURNING id, total, user_id;`, [total, user_id]);
        const newOrderId = orderInsertResults.rows[0].id;

        await Promise.all(meats.map(meat => {
            const insertLineItemText = `INSERT INTO "line_items" ("order_id", "meat_id", "quantity")
            VALUES ($1, $2, $3)`;
            const insertLineItemValues = [newOrderId, meat.id, meat.quantity]
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        console.log(orderInsertResults);
        res.send(orderInsertResults.rows[0]);
    } catch(error) {
        await client.query('ROLLBACK')
        console.log('Error POSTing /api/order', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});














module.exports = router;