import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
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
				data: data.weeks || [],
				tension: 0.2,
				borderColor: '#11b7e0af',
				backgroundColor: ['#ff6385ad', '#36a2ebad', '#ffcd56ad', '#13ca028f'],
				pointRadius: 6,
			},
		],
		labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
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

	return <Bar data={props} options={options} />;
};

export default LineChart;
