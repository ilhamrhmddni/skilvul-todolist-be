const User = require('../models/user');
const bcrypt = require('bcrypt');
const Todo = require('../models/todo');

module.exports = {
	getAllUser: async (req, res) => {
		try {
			const users = await User.find();

			res.json({
				message: 'Berhasil Menampilkan Users',
				users: users,
			});
		} catch {
			res.json({ message: 'Gagal Menampilkan Users' });
		}
	},

	getUserTodos: async (req, res) => {
		try {
			const id = req.params.id;
			const todos = await Todo.find({ userId: id });
			res.json({
				message: 'Berhasil Menampilkan Todo pada User',
				todo: todos,
			});
		} catch {
			res.json({ message: 'Gagal Menampilkan Todo pada User' });
		}
	},

	getUserById: async (req, res) => {
		try {
			const id = req.params.id;
			const user = await User.findById(id);

			if (!user) {
				return res.json({
					message: 'Pengguna tidak ditemukan',
				});
			}

			res.json({
				message: 'Berhasil Mendapatkan User',
				data: user,
			});
		} catch {
			res.json({
				message: 'Gagal mendapatkan User',
			});
		}
	},

	createUser: async (req, res) => {
		let user = req.body;
		try {
			let hashpassword = bcrypt.hashSync(user.password, 10);
			user.password = hashpassword;

			const userCreate = await User.create(user);
			res.json({
				message: 'Berhasil Menambahkan User',
				data: userCreate,
			});
		} catch {
			res.json({ message: 'Gagal Menambahkan User' });
		}
	},

	updateUser: async (req, res) => {
		try {
			const id = req.params.id;
			const user = req.body;
			const userUpdate = await User.findByIdAndUpdate(id, user, { new: true });

			res.json({
				message: 'Berhasil Mengupdate User',
				data: userUpdate,
			});
		} catch {
			res.json({
				message: 'Gagal Mengupdate User',
			});
		}
	},

	deleteUser: async (req, res) => {
		try {
			const id = req.params.id;
			await User.findByIdAndDelete(id);

			res.json({
				message: 'Berhasil Menghapus User',
			});
		} catch {
			res.json({
				message: 'Gagal Menghapus User',
			});
		}
	},
};
