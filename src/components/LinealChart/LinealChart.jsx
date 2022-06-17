import style from './LinealChart.module.scss';
import {
	AreaChart,
	Area,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

/*
	La propiedad data recibe el arreglo de los valores
	La propiedad label recibe la palabra con la que distinguiremos cada seccion del chart
	La propiedad title encabezará el chart
*/

const LinealChart = ({ data, label }) => {
	const prepData = [];
	data.forEach(item => {
		prepData.push({
			value: item,
		});
	});

	return (
		<div className={style.container}>
			<div className={style.label}>
				<h1>{label.title}</h1>
				<p>{label.subtitle}</p>
			</div>
			<ResponsiveContainer width={690} height={200}>
				<AreaChart data={prepData}>
					<CartesianGrid strokeDasharray='5 3' />
					<Tooltip />
					<Area
						type='monotone'
						dataKey='value'
						stroke='#ffc658'
						fill='#8884d8'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LinealChart;
