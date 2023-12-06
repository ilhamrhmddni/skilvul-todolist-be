const Todo = require('../models/todo');

module.exports = {
	getAllTodo: async (req, res) => {
		try {
			const todos = await Todo.find();

			res.json({
				message: 'Berhasil Menampilkan Todos',
				todos: todos,
			});
		} catch {
			res.json({ message: 'Gagal Menampilkan Todos' });
		}
	},

	getTodoById: async (req, res) => {
		try {
			const id = req.params.id;
			const todo = await Todo.findById(id).populate('userId', ['name']);

			if (!todo) {
				return res.json({
					message: 'Todo Tidak Ditemukan',
				});
			}

			res.json({
				message: 'Berhasil Mendapatkan Todo',
				data: todo,
			});
		} catch {
			res.json({
				message: 'Gagal mendapatkan Todo',
			});
		}
	},

	createTodo: async (req, res) => {
		let todo = req.body;
		try {
			await Todo.create(todo);
			res.json({
				message: 'Berhasil Menambahkan Todo',
			});
		} catch {
			res.json({ message: 'Gagal Menambahkan Todo' });
		}
	},

	updateTodo: async (req, res) => {
		const id = req.params.id;
		const todo = req.body;

		try {
			const todoUpdate = await Todo.findByIdAndUpdate(id, todo, { new: true });
			res.json({
				message: 'Berhasil Mengupdate Todo',
				data: todoUpdate,
			});
		} catch {
			res.json({
				message: 'Gagal Mengupdate Todo',
			});
		}
	},

	deleteTodo: async (req, res) => {
		try {
			const id = req.params.id;
			await Todo.findByIdAndDelete(id);

			res.json({
				message: 'Berhasil Menghapus Todo',
			});
		} catch {
			res.json({
				message: 'Gagal Menghapus Todo',
			});
		}
	},
};
