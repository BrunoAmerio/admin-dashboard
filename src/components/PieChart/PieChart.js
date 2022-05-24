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

const PieChart = ({ data, label }) => {
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
	const props = {
		datasets: [
			{
				label,
				data: data.weeks,
				tension: 0.2,
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
					'#12c902cb',
				],
				pointRadius: 6,
			},
		],
		labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4'],
	};

	return (
		<div className={style.container}>
			<h1>{label}</h1>
			<Doughnut data={props} options={options} height={1000} width={1000} />
			{props.labels.map((item, index) => {
				return (
					<div key={item}>
						<h2>
							{' '}
							{item}: {data.weeks[index]}{' '}
						</h2>
					</div>
				);
			})}
		</div>
	);
};

export default PieChart;
