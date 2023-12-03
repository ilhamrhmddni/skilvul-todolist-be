require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = {
	login: async (req, res) => {
		const userLogin = req.body;
		try {
			const user = await User.findOne({
				$or: [{ email: userLogin.email }, { username: userLogin.username }],
			});
			if (!user) {
				throw new Error('Email Tidak Terdaftar');
			}

			if (bcrypt.compareSync(userLogin.password, user.password)) {
				const token = jwt.sign(
					{
						id: user._id,
						credential: userLogin.email
							? { email: userLogin.email }
							: { username: userLogin.username },
					},
					process.env.JWT_TOKEN,
				);

				return res.json({
					message: 'Berhasil Masuk',
					token,
				});
			}
		} catch (error) {
			res.status(500).json({
				message: 'Terjadi kesalahan server',
			});
		}
	},
	registrasi: async (req, res) => {
		try {
			let userRegis = req.body;
			const existingUser = await User.findOne({ email: userRegis.email });
			if (existingUser) {
				return res.status(400).json({
					message: 'Email sudah terdaftar',
				});
			}

			let hashpassword = bcrypt.hashSync(userRegis.password, 10);
			userRegis.password = hashpassword;

			const createUser = await User.create(userRegis);

			res.json({
				messsage: 'Berhasil Registrasi',
				data: createUser,
			});
		} catch (error) {
			res.status(500).json({
				message: 'Terjadi kesalahan server',
			});
		}
	},
};
