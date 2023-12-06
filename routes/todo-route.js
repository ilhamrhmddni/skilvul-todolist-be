const express = require('express');
const route = express.Router();

const {
	getAllTodo,
	createTodo,
	getTodoById,
	updateTodo,
	deleteTodo,
} = require('../controllers/todo-controller');
const verifyToken = require('../middleware/auth');

route.get('/', getAllTodo);
route.get('/:id', getTodoById);
route.post('/', createTodo);
route.put('/:id', updateTodo);
route.delete('/:id', deleteTodo);

module.exports = route;
