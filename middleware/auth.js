require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	try {
		const header = req.headers.authorization;
		if (!header) {
			return res.status(401).json({ message: 'Header Tidak Ditemukan' });
		}

		const token = header.split(' ')[1];
		if (!token) {
			return res.status(401).json({ message: 'Token Salah' });
		}

		const payload = jwt.verify(token, process.env.JWT_TOKEN);
		req.payload = payload;

		next();
	} catch (error) {
		return res.status(401).json({ message: 'Token Tidak Ditemukan' });
	}
};

module.exports = verifyToken;
