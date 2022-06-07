import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import style from './ComparativePieChart.module.scss';

const COLORS = [
	'#0088FE',
	'#00C49F',
	'#fc2222',
	'#FFBB28',
	'#FF8042',
	'#c922fc',
];

// Componente principal
/*
	La propiedad data recibe el arreglo completo de la información que queremos parsear, tener en cuenta que este compoenente trabaja con toda la informacion junta
	La propiedad dataKey recibe el nombre de la propiedad que queremos mostrar
	La propiedad Title recibe el titulo que encabezará el chart
 */
const ComparativePieChart = ({ data, dataKey, title }) => {
	const prepData = [];
	data.forEach(item => {
		prepData.push({
			name: item.name,
			value: item[dataKey].this_week,
		});
	});

	return (
		<div className={style.container}>
			<h2 className={style.title}>{title}</h2>
			<ResponsiveContainer>
				<PieChart>
					<Pie
						data={prepData}
						cx={100}
						cy={80}
						innerRadius={60}
						paddingAngle={5}
						outerRadius={80}
						dataKey='value'
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>

			<div className={style.label}>
				{prepData.map((item, index) => {
					return (
						<h2 key={index}>
							<div
								style={{
									backgroundColor: COLORS[index % COLORS.length],
								}}
							/>
							{item.name}: {item.value}
						</h2>
					);
				})}
			</div>
		</div>
	);
};

export default ComparativePieChart;
