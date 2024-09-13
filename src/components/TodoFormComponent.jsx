/* eslint-disable react/prop-types */
import { FormControl, IconButton, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const TodoFormComponent = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	function handleTodoAdd() {
		addTodo({
			task: todo,
			completed: false,
			id: new Date().toISOString(),
			isDeleted: false,
		});
		setTodo('');
	}
	return (
		<>
			<FormControl defaultValue="" required sx={{ border: '1px solid red' }}>
				<>
					<Input
						id="outlined-adornment-password"
						type="text"
						value={todo}
						onChange={e => setTodo(e.target.value)}
						endAdornment={
							<InputAdornment position="end">
								<IconButton size="small" onClick={handleTodoAdd}>
									<CheckIcon fontSize="small" color="white" />
								</IconButton>
							</InputAdornment>
						}
					/>{' '}
				</>
			</FormControl>
		</>
	);
};

export default TodoFormComponent;
