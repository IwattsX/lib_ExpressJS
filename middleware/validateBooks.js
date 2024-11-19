/**
 * validates a book
 * @param {*} req contains the ISBN, author, title, is_checked_out, and genre inside the body
 * @param {*} res res for sending back the status code
 * @param {*} next callback function
 * @returns status 400 if there is one field missing
 */
module.exports = (req, res, next) => {
    const { ISBN, author, title, is_checked_out, genre } = req.body;
    if (!ISBN || !author || !title || genre === undefined || is_checked_out === undefined) {
        return res.status(400).json({ error: 'Missing required book fields' });
    }
    next();
};
