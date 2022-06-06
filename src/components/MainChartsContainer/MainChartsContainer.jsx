import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';

import style from './MainChartsContainer.module.scss';

const MainChartsContainer = ({ barChart, pieChart }) => {
	return (
		<div className={style.container}>
			<div className={style.item}>
				<BarChart data={barChart.data} label={barChart.label} />
			</div>
			<div className={style.item}>
				<PieChart data={pieChart.data} label={pieChart.label} annual={true} />
			</div>
		</div>
	);
};

export default MainChartsContainer;
