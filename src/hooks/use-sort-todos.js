import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, selectOriginalTodos } from '../selectors';
import { setTodos } from '../actions';

export const useSortTodos = () => {
	const [isSorted, setIsSorted] = useState(false);

	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	const originalTodos = useSelector(selectOriginalTodos);

	const toSort = () => {
		const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
		dispatch(setTodos(sortedTodos));
		setIsSorted(true);
	};

	const toDefaultPosition = () => {
		dispatch(setTodos(originalTodos));
		setIsSorted(false);
	};

	return {
		toSort,
		toDefaultPosition,
		isSorted,
	};
};
