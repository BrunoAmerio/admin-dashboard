import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const LineChart = ({ data, label, annual }) => {
	const options = {
		responsive: true,
		scales: {
			y: {
				min: 0,
			},
		},
	};

	const props = {
		datasets: [
			{
				label,
				data: data.weeks,
				tension: 0.2,
				borderColor: 'rgb(17, 183, 224)',
				pointRadius: 6,
			},
		],
		labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4'],
	};

	useEffect(() => {
		const label = [];
		const score = [];
		if (annual) {
			data.forEach(month => {
				label.push(month.name);
				score.push(month.total);
			});
			props.datasets[0].data = score;
			props.labels = label;
		}
	}, []);

	return <Line data={props} options={options} />;
};

export default LineChart;
