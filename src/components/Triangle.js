import {timePoints} from '../helper'

const Triangle = ({ c, r, time }) => {
	const { hourX, hourY, minuteX, minuteY, secondX, secondY } = timePoints(r, time);
	return <path className="triangle" d={`M ${hourX+c} ${hourY+c} ${minuteX+c} ${minuteY+c} ${secondX+c} ${secondY+c} ${hourX+c} ${hourY+c}`} />;
};

export default Triangle