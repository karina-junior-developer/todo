import { useState, useEffect, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContexts';

export const useRequestGetTodos = (todosURL) => {
	const [isLoadingTodosData, setIsLoadingTodosData] = useState(false); // for taking todo list data from DB
	const { setTodos, setOriginalTodos, refreshTodoItems } = useContext(TodosContext);

	useEffect(() => {
		setIsLoadingTodosData(true);
		fetch(todosURL)
			.then((rowTodos) => rowTodos.json())
			.then((finalTodos) => {
				setTodos(finalTodos);
				setOriginalTodos(finalTodos);
			})
			.finally(() => setIsLoadingTodosData(false));
	}, [refreshTodoItems, todosURL, setTodos, setOriginalTodos]);

	return { isLoadingTodosData };
};
