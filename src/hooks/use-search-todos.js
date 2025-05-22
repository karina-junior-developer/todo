import { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContexts';

export const useSearchTodos = () => {
	const [searchedTodoValue, setSearchedTodoValue] = useState(''); // for searching bar target.value

	const { todos } = useContext(TodosContext);

	const onChangeSearchedValue = (event) => {
		setSearchedTodoValue(event.target.value);
	};

	const foundValues = todos.filter(({ title }) => {
		return title.toLowerCase().includes(searchedTodoValue.toLowerCase());
	});

	return { onChangeSearchedValue, foundValues, searchedTodoValue };
};
