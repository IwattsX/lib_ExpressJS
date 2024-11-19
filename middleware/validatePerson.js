module.exports = (req, res, next) => {
    const { ID, name } = req.body;
    if (!ID || !name) {
        return res.status(400).json({ error: 'Missing required staff/member fields' });
    }
    next();
};
