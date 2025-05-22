import { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContexts';

export const useRequestAddTodo = (todosURL) => {
	const [todoValue, setTodoValue] = useState(''); // for target.value, main input
	const [error, setError] = useState(null); // for empty value error on main todo input
	const [isAddingTodo, setIsAddingTodo] = useState(false); // for adding new todo process

	const { refreshTodoItems, setRefreshTodoItems } = useContext(TodosContext);

	const onChangeTodoTask = (event) => {
		setTodoValue(event.target.value);
	};

	const requestAddTodo = () => {
		if (todoValue.trim() === '') {
			setError('Value cannot be empty');
			return;
		}
		setError(null);
		setIsAddingTodo(true);
		fetch(todosURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoValue,
			}),
		})
			.then((rawTodo) => rawTodo.json())
			.then((finalTodo) => {
				console.log('Todo successfully added!', finalTodo);
				setRefreshTodoItems(!refreshTodoItems);
			})
			.finally(() => setIsAddingTodo(false));

		setTodoValue('');
	};

	const onKeyDownTodoTask = (event) => {
		if (event.key === 'Enter' && !isAddingTodo) {
			event.preventDefault();
			requestAddTodo();
		}
	};

	return {
		requestAddTodo,
		onKeyDownTodoTask,
		onChangeTodoTask,
		isAddingTodo,
		error,
		todoValue,
	};
};
