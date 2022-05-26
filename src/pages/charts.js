import MainCharstContainer from '../components/MainChartsContainer/MainChartsContainer';
import style from '../styles/Chart.module.scss';

// DATA
import ecommerceData from '../data/ecommerce.json';
import categoriesData from '../data/categories.json';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MainChartsContainer from '../components/MainChartsContainer/MainChartsContainer';

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
					<h3>{ecommerceData.sales.this_week}</h3>
					<p>Esta semana</p>
				</div>

				<div className={style.item + ' ' + style.color2}>
					<h2>
						Recaudaciones <ShowChartIcon />{' '}
					</h2>
					<h3>$ {ecommerceData.money_collection.this_week}</h3>
					<p>Esta semana</p>
				</div>

				<div className={style.item + ' ' + style.color3}>
					<h2>
						Visitas <VisibilityIcon />{' '}
					</h2>
					<h3>{ecommerceData.visitors.this_week}</h3>
					<p>Esta semana</p>
				</div>
			</div>

			<div className={style.chartContainer}>
				{/* VISITS */}
				<MainCharstContainer
					barChart={{
						data: ecommerceData.visitors.this_month,
						label: 'Visitas este mes',
					}}
					pieChart={{
						data: ecommerceData.visitors.historic_month,
						label: 'Visitantes',
					}}
				/>

				{/* Ventas  */}
				<MainCharstContainer
					barChart={{
						data: ecommerceData.sales.this_month,
						label: 'Ventas este mes',
					}}
					pieChart={{
						data: ecommerceData.sales.historic_month,
						label: 'Ventas',
					}}
				/>

				{/* Recaudacion  */}
				<MainCharstContainer
					barChart={{
						data: ecommerceData.money_collection.this_month,
						label: 'Recaudacion este mes',
					}}
					pieChart={{
						data: ecommerceData.money_collection.historic_month,
						label: 'Recaudacion',
					}}
				/>
			</div>

			<div className={style.chartContainer}>
				{categoriesData.map(category => {
					return (
						<MainCharstContainer
							key={category.id}
							barChart={{
								data: category.sales.this_month,
								label: 'Ventas este mes ',
							}}
							pieChart={{
								data: category.sales.historic_month,
								label: 'Ventas',
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Charts;
