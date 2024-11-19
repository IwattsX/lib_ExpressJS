const Member = require('../models/Member');

// Create a new member
exports.createMember = async (req, res) => {
    try {
        console.log(res.body);
        const { ID, name } = req.body;
        const newMember = new Member({ ID, name });
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all members
exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a member
exports.updateMember = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMember = await Member.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMember) return res.status(404).json({ error: 'Member not found' });
        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a member
exports.deleteMember = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMember = await Member.findByIdAndDelete(id);
        if (!deletedMember) return res.status(404).json({ error: 'Member not found' });
        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
