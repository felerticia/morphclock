import {radianX,radianY} from '../helper'

const Spikes = ({ c, r }) => <g>
	{Array(12)
		.fill()
		.map((_,i) => 
			<line
				className="spike"
				x1={c + radianX(r - 10, i * 30)}
				y1={c + radianY(r - 10, i * 30)}
				x2={c + radianX(r, i * 30)}
				y2={c + radianY(r, i * 30)}
				key={i}
			/>
		)
	}
</g>;

export default Spikes