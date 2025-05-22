import { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContexts';

export const useRequestDeleteTodo = (todosURL) => {
	const [isDeletingTodo, setIsDeletingTodo] = useState(false); // for deleting process

	const { refreshTodoItems, setRefreshTodoItems } = useContext(TodosContext);

	const requestDeleteTodo = (id) => {
		setIsDeletingTodo(true);

		fetch(`${todosURL}/${id}`, {
			method: 'DELETE',
		})
			.then((rawTodo) => rawTodo.json())
			.then((finalTodo) => {
				console.log('Todo deleted', finalTodo);
				setRefreshTodoItems(!refreshTodoItems);
			})
			.finally(() => setIsDeletingTodo(false));
	};
	return { requestDeleteTodo, isDeletingTodo };
};
