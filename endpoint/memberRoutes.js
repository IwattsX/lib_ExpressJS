const express = require('express');
const router = express.Router();
const {
    createMember,
    getAllMembers,
    updateMember,
    deleteMember,
} = require('../controllers/memberController');

router.post('/', createMember);
router.get('/', getAllMembers);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;
