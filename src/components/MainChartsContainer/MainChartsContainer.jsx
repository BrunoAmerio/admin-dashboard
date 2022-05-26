import Barchart from '../Barchart/Barchart';
import PieChart from '../PieChart/PieChart';

import style from './MainChartsContainer.module.scss';

const MainChartsContainer = ({ barChart, pieChart }) => {
	return (
		<div className={style.container}>
			<div className={style.barChart}>
				<Barchart data={barChart.data} label={barChart.label} />
			</div>
			<div className={style.pieChart}>
				<PieChart data={pieChart.data} label={pieChart.label} annual={true} />
			</div>
		</div>
	);
};

export default MainChartsContainer;
