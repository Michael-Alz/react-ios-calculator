import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sign: '',
	num: 0,
	result: 0,
};

export const calcSlice = createSlice({
	name: 'calc',
	initialState,
	reducers: {
		commaClick: (state, action) => {
			state.num = !state.num.toString().includes('.')
				? state.num + action.payload
				: state.num;
		},
		resetClick: (state) => {
			state.sign = '';
			state.num = 0;
			state.result = 0;
		},
		numberClick: (state, action) => {
			const numberStr = action.payload.toString();
			let numberValue;
			if (numberStr === '0' || state.num === 0) {
				numberValue = numberStr;
			} else {
				numberValue = state.num.toString() + numberStr;
			}
			state.num = Number(numberValue);
		},
		operatorClick: (state, action) => {
			state.sign = action.payload;
			state.result =
				!state.result && state.num ? state.num : state.result;
			state.num = 0;
		},
		equalClick: (state) => {
			if (state.result && state.num) {
				const handleCal = (a, b, sign) => {
					const result = {
						'+': (a, b) => a + b,
						'-': (a, b) => a - b,
						x: (a, b) => a * b,
						'÷': (a, b) => a / b,
					};
					return result[sign](a, b);
				};
				state.result = handleCal(state.result, state.num, state.sign);
				state.num = 0;
				state.sign = '';
			}
		},
		percentClick: (state) => {
			state.num = state.num / 100;
			state.result = state.result / 100;
			state.sign = '';
		},
		inverseClick: (state) => {
			state.num = state.num ? state.num * -1 : 0;
			state.result = state.result ? state.result * -1 : 0;
			state.sign = '';
		},
	},
});

export const getSign = (state) => state.calc.sign;
export const getNum = (state) => state.calc.num;
export const getResult = (state) => state.calc.result;

export const {
	commaClick,
	resetClick,
	numberClick,
	operatorClick,
	equalClick,
	percentClick,
	inverseClick,
} = calcSlice.actions;

export default calcSlice.reducer;
