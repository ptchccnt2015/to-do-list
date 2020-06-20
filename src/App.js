import React from "react";
import "./App.css";

import AddTodo from "./features/to-do-list/AddTodo";
import TodoList from "./features/to-do-list/TodoList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AddTodo></AddTodo>
				<TodoList></TodoList>
			</header>
		</div>
	);
}

export default App;
