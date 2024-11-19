const express = require('express');
const router = express.Router();
const {
    createStaff,
    getAllStaff,
    updateStaff,
    deleteStaff,
} = require('../controllers/staffController');

const validatePerson = require('../middleware/validatePerson');

router.post('/', validatePerson, createStaff);
router.get('/', getAllStaff);
router.put('/:id', validatePerson, updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;
