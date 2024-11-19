/**
 * Validates a person
 * @param {*} req contains the ID and name inside the body
 * @param {*} res res for sending back the status code
 * @param {*} next callback function
 * @returns status 400 if there is one field missing
 */
module.exports = (req, res, next) => {
    const { ID, name } = req.body;
    if (!ID || !name) {
        return res.status(400).json({ error: 'Missing required staff/member fields' });
    }
    next();
};
