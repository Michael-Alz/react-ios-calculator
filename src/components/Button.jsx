import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	commaClick,
	resetClick,
	numberClick,
	equalClick,
	operatorClick,
	percentClick,
	inverseClick,
} from './calcSlice';

const handleClassNames = (btn) => {
	const classNames = {
		'÷': 'primary',
		x: 'primary',
		'-': 'primary',
		'+': 'primary',
		'=': 'primary',
		AC: 'secondary',
		'+/-': 'secondary',
		'%': 'secondary',
		0: 'zero',
	};
	return classNames[btn] ? classNames[btn] : '';
};

const Button = ({ value }) => {
	const dispatch = useDispatch();

	const handleBtnClick = () => {
		if (value === '.') {
			dispatch(commaClick(value));
		} else if (value === 'AC') {
			dispatch(resetClick());
		} else if (['+', '-', 'x', '÷'].includes(value)) {
			dispatch(operatorClick(value));
		} else if (value === '=') {
			dispatch(equalClick());
		} else if (value === '%') {
			dispatch(percentClick());
		} else if (value === '+/-') {
			dispatch(inverseClick());
		} else {
			dispatch(numberClick(value));
		}
	};

	return (
		<button
			onClick={handleBtnClick}
			className={`btn ${handleClassNames(value)}`}
		>
			{value}
		</button>
	);
};

export default Button;
