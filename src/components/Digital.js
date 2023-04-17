const Digital = ({ x, y, time }) => 
	<text x={x} y={y} className="digital">
		{time.toTimeString().slice(0, 8)}
	</text>

export default Digital