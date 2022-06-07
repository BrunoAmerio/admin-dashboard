import style from './LinealChart.module.scss';
import {
	AreaChart,
	Area,
	Tooltip,
	CartesianGrid,
	XAxis,
	ResponsiveContainer,
} from 'recharts';

/*
	La propiedad data recibe el arreglo de los valores
	La propiedad label recibe la palabra con la que distinguiremos cada seccion del chart
	La propiedad title encabezará el chart
*/

const LinealChart = ({ data, label, title }) => {
	const prepData = [];
	data.forEach((item, index) => {
		prepData.push({
			name: `${label} ${index + 1}`,
			value: item,
		});
	});

	return (
		<div className={style.container}>
			<h2>{title}</h2>
			<ResponsiveContainer width={690} height={200}>
				<AreaChart data={prepData}>
					<CartesianGrid strokeDasharray='5 3' />
					<Tooltip />
					<XAxis dataKey='name' />
					<Area type='monotone' dataKey='value' stroke='#888efc' />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LinealChart;
