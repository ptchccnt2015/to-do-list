import { useSelector } from "react-redux";

const useTodoList = () => {
	const todos = useSelector((state) => state.todos.todos);
	const editIndex = useSelector((state) => state.todos.editIndex);

	return {
		todos,
		editIndex,
	};
};

export default useTodoList;
