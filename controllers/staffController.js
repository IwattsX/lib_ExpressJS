const Staff = require('../models/Staff');

// Create a new staff member
exports.createStaff = async (req, res) => {
    console.log(`Req body in create staff`, req.body); // Log the incoming request body
    try {
        const { ID, name } = req.body; // Extract data from the request body
        const newStaff = new Staff({ ID, name }); // Create a new staff object
        await newStaff.save(); // Save to the database
        res.status(201).json(newStaff); // Send the created staff object in the response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle any errors
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
