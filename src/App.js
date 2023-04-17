import './App.css';
import { useEffect, useState } from 'react';
import Circle from './components/Circle'
import Spikes from './components/Spikes'
import Triangle from './components/Triangle'
import Hands from './components/Hands'
import Digital from './components/Digital'

function App() {
  const [time, setTime] = useState(new Date());

	useEffect(() => {
		window.setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	const size = 400;

	const c = size / 2;

	const r = (size - 30) / 2;

  return (
		<svg
			xmlns="http://www.w3.org/svg/2000"
			viewBox={`0 0 ${size} ${size}`}
			width={size}
			height={size}>
				<Circle className="clock" cx={c} cy={c} r={c - 10} />
				<Spikes c={c} r={r} />
				<Triangle c={c} r={r} time={time} />
				<Hands c={c} r={r} time={time} />
				<Digital time={time} x={c} y={c} />
		</svg>
	);
}

export default App;
