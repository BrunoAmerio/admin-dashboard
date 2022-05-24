import style from '../styles/Chart.module.scss';
import chart from '../data/ecommerce.json';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import LineChart from '../components/LineChart/LineChart';

const Charts = () => {
	return (
		<div className={style.container}>
			<h1>
				<BarChartIcon fontSize='large' /> Graficos
			</h1>

			<div className={style.thisWeekContainer}>
				<h1>Esta semana:</h1>
				<div className={style.item}>
					<h2>
						Ventas <TurnedInNotIcon />
					</h2>
					<h3>{chart.sales.this_week}</h3>
				</div>

				<div className={style.item}>
					<h2>
						Recaudaciones <ShowChartIcon />{' '}
					</h2>
					<h3>$ {chart.money_collection.this_week}</h3>
				</div>

				<div className={style.item}>
					<h2>
						Visitas <VisibilityIcon />{' '}
					</h2>
					<h3>{chart.visitors.this_week}</h3>
				</div>
			</div>

			<div className={style.chartContainer}>
				<div className={style.chart}>
					<LineChart
						data={chart.visitors.this_month}
						label='Visitas este mes'
					/>
					<LineChart
						data={chart.visitors.historic_month}
						label='Visitas en todo el año'
						annual={true}
					/>
				</div>

				<div className={style.chart}>
					<LineChart data={chart.sales.this_month} label='Ventas este mes' />
					<LineChart
						data={chart.sales.historic_month}
						label='Ventas en todo el año'
						annual={true}
					/>
				</div>

				<div className={style.chart}>
					<LineChart
						data={chart.money_collection.this_month}
						label='Recaudacion este mes'
					/>
					<LineChart
						data={chart.money_collection.historic_month}
						label='Recaudacion en todo el año'
						annual={true}
					/>
				</div>
			</div>
		</div>
	);
};
export default Charts;
