const express = require('express');
const router = express.Router();
const Reservation = require('../models_new/Reservation');

// Create reservation
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.send(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;