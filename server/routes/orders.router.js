const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    SELECT "user".customer_name, orders.total, meat.type, meat.price, line_items.quantity, line_items.order_id, orders.completion_status FROM "user" JOIN orders ON "user".id = orders.user_id JOIN line_items ON orders.id = line_items.order_id JOIN meat ON line_items.meat_id = meat.id
GROUP BY "user".customer_name, orders.total, meat.type, meat.price, line_items.quantity, line_items.order_id, orders.completion_status
ORDER BY "user".customer_name;
    `;
    pool.query(sqlText)
        .then(result => {
            console.log(result)
            res.send(result.rows);
        })
        .catch(err => {
            console.log('error GETting orders', err);
            res.sendStatus(500);
        })

})

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = `DELETE FROM orders WHERE id = $1;`;
    pool.query(sqlText, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('error GETting orders', err);
            res.sendStatus(500);
        })

})

router.put('/:id', (req, res) => {
    const idToUpdate = req.params.id
    const sqlText = `UPDATE orders SET "completion_status" = true
    WHERE "id" = $1;`;
    pool.query(sqlText, [idToUpdate])
    .then( result => {
        res.sendStatus(200);
        console.log('result is', result);
    })
    .catch(error => {
        console.log('error', error);
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