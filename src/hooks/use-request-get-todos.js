import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../actions/set-todos';
import { todosURL } from '../constants/constants';
import { selectIsLoading, selectRefreshTodoItems } from '../selectors';

export const useRequestGetTodos = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const isRefreshing = useSelector(selectRefreshTodoItems);

	useEffect(() => {
		dispatch(fetchTodos(todosURL));
	}, [dispatch, isRefreshing]);

	return { isLoadingTodosData: isLoading };
};
