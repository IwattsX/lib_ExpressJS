module.exports = (req, res, next) => {
    const { ISBN, author, title, is_checked_out, genre } = req.body;
    if (!ISBN || !author || !title || genre === undefined || is_checked_out === undefined) {
        return res.status(400).json({ error: 'Missing required book fields' });
    }
    next();
};
