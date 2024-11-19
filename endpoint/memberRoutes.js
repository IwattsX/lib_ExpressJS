const express = require('express');
const router = express.Router();
const {
    createMember,
    getAllMembers,
    updateMember,
    deleteMember,
} = require('../controllers/memberController');
const validatePerson = require('../middleware/validatePerson');

router.post('/', validatePerson, createMember);
router.get('/', getAllMembers);
router.put('/:id', validatePerson, updateMember);
router.delete('/:id', deleteMember);

module.exports = router;
