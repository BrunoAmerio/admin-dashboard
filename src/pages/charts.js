import style from '../styles/Chart.module.scss';
import chart from '../data/ecommerce.json';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import LineChart from '../components/LineChart/LineChart';
import PieChart from '../components/PieChart/PieChart';

const Charts = () => {
	return (
		<div className={style.container}>
			<h1>
				<BarChartIcon fontSize='large' /> Graficos
			</h1>

			<div className={style.thisWeekContainer}>
				<div className={style.item + ' ' + style.color1}>
					<h2>
						Ventas <TurnedInNotIcon />
					</h2>
					<h3>{chart.sales.this_week}</h3>
					<p>Esta semana</p>
				</div>

				<div className={style.item + ' ' + style.color2}>
					<h2>
						Recaudaciones <ShowChartIcon />{' '}
					</h2>
					<h3>$ {chart.money_collection.this_week}</h3>
					<p>Esta semana</p>
				</div>

				<div className={style.item + ' ' + style.color3}>
					<h2>
						Visitas <VisibilityIcon />{' '}
					</h2>
					<h3>{chart.visitors.this_week}</h3>
					<p>Esta semana</p>
				</div>
			</div>

			<div className={style.mainChartContainer}>
				<div className={style.mainChart}>
					<LineChart
						data={chart.visitors.this_month}
						label='Visitas este mes'
					/>
				</div>

				<div className={style.mainDonuts}>
					<PieChart data={chart.visitors.this_month} label='Visitantes' />
				</div>
			</div>
		</div>
	);
};
export default Charts;
