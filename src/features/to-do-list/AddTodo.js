import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../redux/to-do-list/actions";
import useTodoList from "../../hooks/useTodoList";

const AddTodo = () => {
	const dispatch = useDispatch();
	const { todos, editIndex } = useTodoList();
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(value));
		setValue("");
	};

	const handleCancel = () => {
		editTodo(null);
	};

	useEffect(() => {
		if (editIndex || editIndex === 0) {
			setValue(todos[editIndex].text);
		} else {
			setValue("");
		}
	}, [editIndex]);

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={value} onChange={handleChange} />
			<input
				type="submit"
				value={editIndex || editIndex === 0 ? "update" : "add"}
			/>
			{editIndex || editIndex === 0 ? (
				<button onClick={handleCancel}>cancel</button>
			) : null}
		</form>
	);
};

export default AddTodo;
