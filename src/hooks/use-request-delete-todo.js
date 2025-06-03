import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRefresh } from '../actions/set-refresh';

export const useRequestDeleteTodo = (todosURL) => {
	const [isDeletingTodo, setIsDeletingTodo] = useState(false); // for deleting process

	const dispatch = useDispatch();

	const requestDeleteTodo = (id) => {
		setIsDeletingTodo(true);

		fetch(`${todosURL}/${id}`, {
			method: 'DELETE',
		})
			.then((rawTodo) => rawTodo.json())
			.then((finalTodo) => {
				console.log('Todo deleted', finalTodo);
				dispatch(setRefresh());
			})
			.finally(() => setIsDeletingTodo(false));
	};
	return { requestDeleteTodo, isDeletingTodo };
};
