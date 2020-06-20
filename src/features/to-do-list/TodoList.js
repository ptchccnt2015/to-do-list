import React from "react";
import { useDispatch } from "react-redux";
import useTodoList from "../../hooks/useTodoList";
import { doneTodo, deleteTodo, editTodo } from "../../redux/to-do-list/actions";

const TodoList = () => {
	const dispatch = useDispatch();
	const { todos } = useTodoList();

	const handleDone = (index) => {
		dispatch(doneTodo(index));
	};

	const handleDelete = (index) => {
		dispatch(deleteTodo(index));
	};

	const handleEdit = (index) => {
		dispatch(editTodo(index));
	};

	return (
		<ul>
			{todos.map((todo, index) => {
				return (
					<li key={index}>
						{todo.completed ? <del> {todo.text} </del> : todo.text}
						<button
							onClick={() => {
								handleDone(index);
							}}
						>
							done
						</button>
						<button
							onClick={() => {
								handleDelete(index);
							}}
						>
							delete
						</button>
						<button
							onClick={() => {
								handleEdit(index);
							}}
						>
							edit
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
