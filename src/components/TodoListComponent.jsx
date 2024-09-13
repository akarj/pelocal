/* eslint-disable react/prop-types */
import TodoItemComponent from './TodoItemComponent';

const TodoListComponent = ({ list, deleteClick, editClick, completeClick }) => {
	console.log('list', list);
	return (
		<div className="flex flex-col">
			{list.map((item, index) => {
				return (
					<TodoItemComponent
						key={index}
						item={item}
						deleteClick={deleteClick}
						editClick={editClick}
						completeClick={completeClick}
					/>
				);
			})}
		</div>
	);
};

export default TodoListComponent;
