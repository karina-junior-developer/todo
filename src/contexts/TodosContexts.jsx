import { createContext, useState } from 'react';

export const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [refreshTodoItems, setRefreshTodoItems] = useState(false);
	const [originalTodos, setOriginalTodos] = useState([]);
	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
				refreshTodoItems,
				setRefreshTodoItems,
				originalTodos,
				setOriginalTodos,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};
