const express = require('express');
const router = express.Router();

// Define your API routes here
router.get('/api/data', (req, res) => {
  const data = {
    zipCode: '12345',
    firstName: 'John',
    lastName: 'Doe',
    vehicleYear: '2022',
    vehicleMake: 'Toyota',
    vehicleModel: 'Camry'
  };
  res.json(data);
});

module.exports = router;