/* eslint-disable react/prop-types */
import { FormControl, IconButton, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TodoItemComponent = ({ item, deleteClick, editClick, completeClick }) => {
	const [tempTodo, setTempTodo] = useState(item.task);
	const [isEditOn, setIsEditOn] = useState(false);

	console.log('item', { item, tempTodo });

	return (
		<div>
			<FormControl
				defaultValue=""
				required
				sx={{ border: '1px solid blue', display: 'flex' }}
			>
				<>
					<Input
						id="outlined-adornment-password"
						type="text"
						value={tempTodo}
						onChange={e => setTempTodo(e.target.value)}
						readOnly={!isEditOn}
						sx={{
							textDecoration: item.completed ? 'line-through' : 'none',
							color: item.completed ? 'gray' : 'inherit',
							fontWeight: item.completed ? 'normal' : 'bold',
							fontStyle: item.completed ? 'italic' : 'normal',
							opacity: item.completed ? 0.5 : 1,
							flex: 1,
						}}
						endAdornment={
							<InputAdornment position="end">
								<div className="flex gap-2">
									<IconButton
										size="small"
										key="edit"
										onClick={() => {
											setIsEditOn(prev => !prev);
											editClick(item.id, tempTodo);
										}}
									>
										<EditIcon fontSize="small" color="white" />
									</IconButton>
									<IconButton
										size="small"
										key="delete"
										onClick={() => deleteClick(item.id)}
									>
										<DeleteIcon fontSize="small" color="white" />
									</IconButton>
									<IconButton
										size="small"
										key="complete"
										onClick={() => completeClick(item.id)}
									>
										<CheckCircleIcon fontSize="small" color="white" />
									</IconButton>
								</div>
							</InputAdornment>
						}
					/>{' '}
				</>
			</FormControl>
		</div>
	);
};

export default TodoItemComponent;
