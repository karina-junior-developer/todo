import { useState } from 'react';
import { selectTodos } from '../selectors';
import { useSelector } from 'react-redux';

export const useSearchTodos = () => {
	const [searchedTodoValue, setSearchedTodoValue] = useState(''); // for searching bar target.value
	const todos = useSelector(selectTodos);

	const onChangeSearchedValue = (event) => {
		setSearchedTodoValue(event.target.value);
	};

	const foundValues = todos.filter(({ title }) => {
		return title.toLowerCase().includes(searchedTodoValue.toLowerCase());
	});

	return { onChangeSearchedValue, foundValues, searchedTodoValue };
};
