import { useEffect, useState } from 'react';
import TodoFormComponent from './components/TodoFormComponent';
import FilterComponent from './components/FilterComponent';
import TodoListComponent from './components/TodoListComponent';

function App() {
	const [todo, setTodo] = useState([]);
	const [list, setList] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		const storedTodo = localStorage.getItem('todo');
		if (storedTodo) {
			setTodo(JSON.parse(storedTodo));
		}
	}, []);

	useEffect(() => {}, [filter]);

	function addTodo(newTodo) {
		setTodo(prev => [...prev, newTodo]);
	}

	function handleListFilter(ev) {
		const newList = todo.filter(item =>
			item.task.toLowerCase().includes(ev.target.value.toLowerCase())
		);
		console.log('filter', { filter, newList, todo });
		setList(newList);
	}

	function handleEdit(id, text) {
		const newList = todo.map(item => {
			if (item.id === id) {
				return { ...item, task: text };
			}
			return item;
		});

		setTodo(newList);
	}

	function handleDelete(id) {
		const newList = todo.filter(item => item.id !== id);
		setTodo(newList);
	}

	function handleComplete(id) {
		const newList = todo.map(item => {
			if (item.id === id) {
				return { ...item, completed: item.completed ? !item.completed : true };
			}
			return item;
		});

		setTodo(newList);
	}

	return (
		<>
			<div className="container border border-1 border-solid h-[100dvh] w-[100dvw] flex items-center justify-center">
				<div className="content shadow rounded h-[70dvh] w-[75rem] flex flex-col">
					<TodoFormComponent addTodo={addTodo} />
					<FilterComponent
						setList={handleListFilter}
						filter={filter}
						setFilter={setFilter}
					/>
					<TodoListComponent
						list={filter ? list : todo}
						todos={todo}
						deleteClick={handleDelete}
						editClick={handleEdit}
						completeClick={handleComplete}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
