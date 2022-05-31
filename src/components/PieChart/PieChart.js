import { Doughnut } from 'react-chartjs-2';
import style from './PieChart.module.scss';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

// Debe enviarse el nombre del mes y el valor para ese nombre
// El label es el titulo que se mostrará por encima del grafico
const PieChart = ({ data, label }) => {
	// Seteamos las configuraciones del gráfico
	const options = {
		responsive: true,
		width: 1000,
		height: 1000,
		scales: {
			y: {
				min: 0,
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const colors = [
		'#ff6384',
		'#36a2eb',
		'#ffcd56',
		'#12c902cb',
		'#ff5b5bde',
		'#bc4dfdc4',
		'#242fc7de',
	];

	// Seteamos las propiedades del gráfico
	const props = {
		datasets: [
			{
				data: data.map(item => item.total),
				tension: 0.2,
				backgroundColor: colors,
				pointRadius: 6,
			},
		],
		labels: data.map(item => item.name),
	};

	return (
		<div className={style.container}>
			<h1>{label || 'Undefined'}</h1>
			<div className={style.donutContainer}>
				<Doughnut data={props} options={options} height={1000} width={1000} />
			</div>
			<div className={style.indexContainer}>
				{data.map((item, index) => {
					return (
						<h2 key={item.name} className={style.item}>
							<span
								style={{
									backgroundColor: `${props.datasets[0].backgroundColor[index]}`,
								}}
							/>
							{item.name}: {item.total}{' '}
						</h2>
					);
				})}
			</div>
		</div>
	);
};

export default PieChart;
