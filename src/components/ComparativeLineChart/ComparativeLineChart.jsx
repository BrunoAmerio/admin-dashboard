import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';
import style from './ComparativeLineChart.module.scss';

const ComparativeLineChart = ({ data1, data2, label }) => {
	const readyData = [];

	data1.forEach((item, index) => {
		readyData.push({
			'Este mes': item,
			'Mes pasado': data2[index],
		});
	});

	return (
		<div className={style.container}>
			<div className={style.label}>
				<h1>{label.title}</h1>
				<p>{label.subtitle}</p>
			</div>
			<ResponsiveContainer width={548} height={250}>
				<AreaChart data={readyData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Area
						type='monotone'
						dataKey='Este mes'
						stackId='1'
						stroke='#8884d8'
						fill='#8884d8'
					/>
					<Area
						type='monotone'
						dataKey='Mes pasado'
						stackId='1'
						stroke='#ffc658'
						fill='#ffc658'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ComparativeLineChart;
