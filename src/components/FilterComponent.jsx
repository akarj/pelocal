/* eslint-disable react/prop-types */
import { Input } from '@mui/material';

const FilterComponent = ({ setList, filter, setFilter }) => {
	return (
		<>
			<Input
				type="text"
				value={filter}
				onChange={e => {
					setFilter(e.target.value);
					setList(e);
				}}
				placeholder="serach todo"
			/>
		</>
	);
};

export default FilterComponent;
