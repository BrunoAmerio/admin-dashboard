import style from './LinealChart.module.scss';
import { LineChart, Line, Tooltip, CartesianGrid, XAxis } from 'recharts';

const LinealChart = ({ data, label }) => {
	const prepData = [];
	data.forEach((item, index) => {
		prepData.push({
			name: `${label} ${index + 1}`,
			value: item,
		});
	});

	return (
		<div className={style.container}>
			<LineChart
				width={600}
				height={200}
				data={prepData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<Tooltip />
				<Line
					type='monotone'
					dataKey='value'
					stroke='#888efc'
					activeDot={{ r: 8 }}
				/>
				<Line type='monotone' dataKey='uv' stroke='#82ca9d' />
			</LineChart>
		</div>
	);
};

export default LinealChart;
