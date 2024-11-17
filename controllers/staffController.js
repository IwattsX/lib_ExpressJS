const Staff = require('../models/Staff');

// Create a new staff member
exports.createStaff = async (req, res) => {
    try {
        const { name, role, email } = req.body;
        const newStaff = new Staff({ name, role, email });
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all staff
exports.getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a staff member
exports.updateStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStaff = await Staff.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStaff) return res.status(404).json({ error: 'Staff not found' });
        res.status(200).json(updatedStaff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a staff member
exports.deleteStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStaff = await Staff.findByIdAndDelete(id);
        if (!deletedStaff) return res.status(404).json({ error: 'Staff not found' });
        res.status(200).json({ message: 'Staff deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
