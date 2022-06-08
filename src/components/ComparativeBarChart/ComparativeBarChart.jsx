import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

import style from './ComparativeBarChart.module.scss';

// Este componente toma dos arreglos y los compara
// Estos arreglos deben contener objetos en los que dentro tengan la propiedad con el valor que queremos comparar
/*
	Las propiedades data1 recibe el primer arreglo, data2 el segundo
	La propiedad title es lo que encabezará el chart
	La propiedad XLegend recibe la palabra con la que identificaremos cada sección del chart
*/
const ComparativeChart = ({ data1, data2, title, XLegend }) => {
	const data = [];
	data1.value.forEach((value, index) => {
		data.push({
			name: XLegend + ' ' + (index + 1),
			[data1.name]: value,
			[data2.name]: data2.value[index],
		});
	});

	return (
		<div className={style.container}>
			<h2 className={style.title}>{title}</h2>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey={data1.name} fill='#8884d8' />
					<Bar dataKey={data2.name} fill='#82ca9d' />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ComparativeChart;
