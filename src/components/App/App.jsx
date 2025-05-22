import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestEditTodo,
	useSortTodos,
	useSearchTodos,
} from '../../hooks/index';
import { todosURL } from '../../constants/constants';
import styles from './App.module.css';
import { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContexts';
import {
	EditInputBlock,
	LoadingBlock,
	MainInputBlock,
	SearchBlock,
	TodoListBlock,
} from '../index';

export const App = () => {
	const { todos } = useContext(TodosContext);

	// General, main todo list data gathering - DONE
	const { isLoadingTodosData } = useRequestGetTodos(todosURL);

	// Add todo item to the list - DONE
	const {
		requestAddTodo,
		onKeyDownTodoTask,
		onChangeTodoTask,
		isAddingTodo,
		error,
		todoValue,
	} = useRequestAddTodo(todosURL);

	// Delete todo task from the list - DONE
	const { requestDeleteTodo, isDeletingTodo } = useRequestDeleteTodo(todosURL);

	// Edit todo task - DONE
	const {
		editedTodoValue,
		isEditingTodo,
		editedTodoId,
		newError,
		startEditing,
		cancelEditing,
		editAndSaveTodo,
		onChangeEditingTodoTask,
		onKeyDownEditingTask,
	} = useRequestEditTodo(todosURL);

	// Search - DONE
	const { onChangeSearchedValue, foundValues, searchedTodoValue } = useSearchTodos();

	// Sort - DONE
	const { toSort, toDefaultPosition, isSorted } = useSortTodos();

	return (
		<>
			<SearchBlock
				searchedTodoValue={searchedTodoValue}
				onChangeSearchedValue={onChangeSearchedValue}
				isSorted={isSorted}
				toDefaultPosition={toDefaultPosition}
				toSort={toSort}
			/>
			<div className={styles.mainBlock}>
				<MainInputBlock
					error={error}
					todoValue={todoValue}
					onChangeTodoTask={onChangeTodoTask}
					onKeyDownTodoTask={onKeyDownTodoTask}
					requestAddTodo={requestAddTodo}
					isAddingTodo={isAddingTodo}
				/>
				<div className={styles.todoSection}>
					{isLoadingTodosData ? (
						<LoadingBlock />
					) : (
						<ul>
							{(searchedTodoValue ? foundValues : todos).map(
								({ title, id }) => {
									return (
										<li key={id}>
											{isEditingTodo && editedTodoId === id ? (
												<EditInputBlock
													newError={newError}
													editedTodoValue={editedTodoValue}
													onChangeEditingTodoTask={
														onChangeEditingTodoTask
													}
													onKeyDownEditingTask={(event) =>
														onKeyDownEditingTask(event, id)
													}
													editAndSaveTodo={() =>
														editAndSaveTodo(id)
													}
													cancelEditing={cancelEditing}
												/>
											) : (
												<TodoListBlock
													title={title}
													requestDeleteTodo={() =>
														requestDeleteTodo(id)
													}
													isDeletingTodo={isDeletingTodo}
													startEditing={() =>
														startEditing(id, title)
													}
													isEditingTodo={isEditingTodo}
												/>
											)}
										</li>
									);
								},
							)}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};
