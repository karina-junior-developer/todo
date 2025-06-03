import styles from './SearchAndSortBlock.module.css';
import PropTypes from 'prop-types';

export const SearchAndSortBlock = ({
	searchedTodoValue,
	onChangeSearchedValue,
	isSorted,
	toDefaultPosition,
	toSort,
}) => {
	return (
		<div className={styles.searchBlock}>
			<input
				className={styles.searchInput}
				type="text"
				name="searchBar"
				placeholder="Search for To-do tasks..."
				value={searchedTodoValue}
				onChange={onChangeSearchedValue}
			/>
			<button
				className={styles.sortButton}
				onClick={!isSorted ? () => toSort() : toDefaultPosition}
			>
				{!isSorted ? 'Sort' : 'Unsort'}
			</button>
		</div>
	);
};

SearchAndSortBlock.PropTypes = {
	searchedTodoValue: PropTypes.string,
	onChangeSearchedValue: PropTypes.func,
	isSorted: PropTypes.bool,
	toDefaultPosition: PropTypes.func,
	toSort: PropTypes.func,
};
