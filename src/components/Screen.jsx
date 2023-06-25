import { Textfit } from 'react-textfit';
import { useSelector } from 'react-redux';
import { getNum, getResult } from './calcSlice';
const Screen = () => {
	const result = useSelector(getResult);
	const num = useSelector(getNum);

	return (
		<Textfit className="screen" max={70} mode="single">
			{num ? num : result}
		</Textfit>
	);
};

export default Screen;
