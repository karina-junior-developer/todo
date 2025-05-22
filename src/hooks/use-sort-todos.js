import { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContexts';

export const useSortTodos = () => {
	const [isSorted, setIsSorted] = useState(false); // for sorting - initial state

	const { todos, setTodos, originalTodos } = useContext(TodosContext);

	const toSort = () => {
		const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
		setTodos(sortedTodos);
		setIsSorted(true);
	};

	const toDefaultPosition = () => {
		setTodos(originalTodos);
		setIsSorted(false);
	};

	return {
		toSort,
		toDefaultPosition,
		isSorted,
	};
};
