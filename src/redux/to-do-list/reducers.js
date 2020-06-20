import initialState from "../initialState";

import { ADD_TODO, DONE_TODO, DELETE_TODO, EDIT_TODO } from "./types";

const todoReducers = (state = initialState.todos, action) => {
	switch (action.type) {
		case ADD_TODO:
			if (state.editIndex || state.editIndex === 0) {
				state.todos[state.editIndex].text = action.payload.text;
				state.editIndex = null;

				return {
					...state,
				};
			}

			return {
				todos: [
					...state.todos,
					{
						text: action.payload.text,
						completed: false,
					},
				],
			};
		case DONE_TODO:
			state.todos[action.payload].completed = true;

			return { todos: [...state.todos] };
		case DELETE_TODO:
			state.todos.splice(action.payload, 1);

			return {
				todos: [...state.todos],
			};
		case EDIT_TODO:
			state.editIndex = action.payload;

			return {
				...state,
			};
		default:
			return state;
	}
};

export default todoReducers;
