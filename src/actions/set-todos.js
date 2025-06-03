import { setOriginalTodos, setIsLoading } from './index';

export const setTodos = (todos) => ({
	type: 'SET_TODOS',
	payload: todos,
});

export const fetchTodos = (todosURL) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		try {
			const response = await fetch(todosURL);
			const data = await response.json();

			dispatch(setTodos(data));
			dispatch(setOriginalTodos(data));
		} catch (error) {
			console.error('Failed to fetch todos:', error);
		} finally {
			dispatch(setIsLoading(false));
		}
	};
};
