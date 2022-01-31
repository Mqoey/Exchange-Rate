const express = require('express');
const router = express.Router();

const currencyController = require('../controllers/currency.controller');

// get all currencys
router.get('/', currencyController.getcurrencyList);

// get currency by ID
router.get('/:id',currencyController.getcurrencyByID);

// create new currency
router.post('/', currencyController.createNewcurrency);

// update currency
router.put('/:id', currencyController.updatecurrency);

// delete currency
router.delete('/:id',currencyController.deletecurrency);

module.exports = router;