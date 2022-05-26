import { useEffect } from 'react';
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

const PieChart = ({ data, label, annual }) => {
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
				data: data.weeks || [],
				tension: 0.2,
				// SE LE DEBEN ASIGNAR MÁS COLORES HASTA LLEGAR A UN TOTAL DE 12
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
					'#12c902cb',
				],
				pointRadius: 6,
			},
		],
		labels: data.map(month => month.name),
	};

	useEffect(() => {
		if (annual) {
			const score = [];
			data.forEach(month => {
				score.push(month.total);
			});
			props.datasets[0].data = score;
		}
	}, []);

	return (
		<div className={style.container}>
			<h1>{label}</h1>
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
