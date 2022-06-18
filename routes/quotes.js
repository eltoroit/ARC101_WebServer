const express = require('express');
const db = require('../services/db');
const router = express.Router();

/* GET quotes listing. */
router.get('/', async (req, res, next) => {
    debugger;
    try {
        const rows = await db.query('SELECT id, quote, author FROM quote');
        // res.json(rows);
        res.render('quotes', {
            title: "Quotes",
            rows,
            meta: {
                page: rows.length
            }
        });
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
});

module.exports = router;
