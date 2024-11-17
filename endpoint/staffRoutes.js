const express = require('express');
const router = express.Router();
const {
    createStaff,
    getAllStaff,
    updateStaff,
    deleteStaff,
} = require('../controllers/staffController');

router.post('/', createStaff);
router.get('/', getAllStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;
