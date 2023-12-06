const express = require('express');
const route = express.Router();

const {
	getAllUser,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	getUserTodos,
} = require('../controllers/user-controller');

route.get('/', getAllUser);
route.get('/:id', getUserById);
route.get('/todos/:id', getUserTodos);
route.post('/', createUser);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

module.exports = route;
