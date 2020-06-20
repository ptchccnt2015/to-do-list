import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO } from "./types";

export const addTodo = (data) => {
	return {
		type: ADD_TODO,
		payload: {
			text: data,
		},
	};
};

export const doneTodo = (data) => {
	return {
		type: DONE_TODO,
		payload: data,
	};
};

export const deleteTodo = (data) => {
	return {
		type: DELETE_TODO,
		payload: data,
	};
};

export const editTodo = (data) => {
	return {
		type: EDIT_TODO,
		payload: data,
	};
};
