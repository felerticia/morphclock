import Circle from "./Circle";
import {timePoints} from '../helper'

const Hands = ({ c, r, time }) => {
	const { hourX, hourY, minuteX, minuteY, secondX, secondY } = timePoints(r, time);
	return (
		<g>
			<Circle className="hands" cx={c + hourX} cy={c + hourY} r={15} />
			<Circle className="hands" cx={c + minuteX} cy={c + minuteY} r={11} />
			<Circle className="hands" cx={c + secondX} cy={c + secondY} r={7} />
		</g>
	);
};

export default Hands