import { LineChart, Line, Tooltip } from 'recharts';

const MinimalLineChart = ({ data }) => {
	const readyData = [];

	data.forEach(item => {
		readyData.push({
			value: item,
		});
	});

	return (
		<LineChart data={readyData} width={150} height={50}>
			<Tooltip />
			<Line type='linear' dataKey='value' stroke='#8884d8' strokeWidth={2} />
		</LineChart>
	);
};

export default MinimalLineChart;
