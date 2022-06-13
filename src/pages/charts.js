// Components
import MinimalLineChart from '../components/MinimalLineChart/MinimalLineChart';
import ListOrdersContainer from '../components/ListOrdersContainer/ListOrdersContainer';
import ComparativePieChart from '../components/ComparativePieChart/ComparativePieChart';
import ComparativeLineChart from '../components/ComparativeLineChart/ComparativeLineChart';
import HeadDefault from '../components/Head/Head';

// DATA
import ecommerceData from '../data/ecommerce.json';
import categoriesData from '../data/categories.json';
import ordersData from '../data/orders.json';

// Icons
import style from '../styles/Chart.module.scss';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BarChartIcon from '@mui/icons-material/BarChart';

const Charts = () => {
	return (
		<div>
			<HeadDefault
				title='Panel'
				description='Admin Dashboard charts page'
				meta='graficos panel principal general'
			/>

			<div className='titleContainer'>
				<div className='icon'>
					<BarChartIcon fontSize='large' />
				</div>
				<div className='title'>
					<h1>Panel</h1>
					<p>
						Graficos principales con informacion relevante sobre el e-commerce
						en general
					</p>
				</div>
			</div>

			<main className={style.container}>
				<div className={style.thisWeekContainer}>
					<div className={style.item}>
						<h2>Ventas</h2>

						<div className={style.number} style={{ color: '#FFB800' }}>
							<TurnedInNotIcon fontSize='large' />
							<h2>{ecommerceData.sales.this_week}</h2>
						</div>

						<MinimalLineChart data={ecommerceData.sales.this_month.weeks} />
					</div>

					<div className={style.item}>
						<h2>Recaudacion</h2>

						<div className={style.number} style={{ color: '#9123FF' }}>
							<ShowChartIcon fontSize='large' />
							<h2>{ecommerceData.money_collection.this_week}</h2>
						</div>

						<MinimalLineChart
							data={ecommerceData.money_collection.this_month.weeks}
						/>
					</div>

					<div className={style.item}>
						<h2>Visitas</h2>

						<div className={style.number} style={{ color: '#0DD109' }}>
							<VisibilityIcon fontSize='large' />
							<h2>{ecommerceData.visitors.this_week}</h2>
						</div>
						<MinimalLineChart data={ecommerceData.visitors.this_month.weeks} />
					</div>
				</div>

				<div className={style.body}>
					<section className={style.section}>
						<div className={style.slideContainer}>
							<ComparativeLineChart
								data1={ecommerceData.sales.this_month.weeks}
								data2={
									ecommerceData.sales.historic_month[
										ecommerceData.sales.historic_month.length - 1
									].weeks
								}
								label={{ title: 'Recaudación', subtitle: 'Este mes' }}
							/>

							<ComparativeLineChart
								data1={ecommerceData.money_collection.this_month.weeks}
								data2={
									ecommerceData.money_collection.historic_month[
										ecommerceData.money_collection.historic_month.length - 1
									].weeks
								}
								label={{ title: 'Recaudacion', subtitle: 'Este mes' }}
							/>

							<ComparativeLineChart
								data1={ecommerceData.visitors.this_month.weeks}
								data2={
									ecommerceData.visitors.historic_month[
										ecommerceData.visitors.historic_month.length - 1
									].weeks
								}
								label={{ title: 'Visitas', subtitle: 'Este mes' }}
							/>
						</div>

						<div className={style.listContainer}>
							<ListOrdersContainer
								data={ordersData.slice(0, 5)}
								title={'Ultimas ordenes'}
							/>
						</div>
					</section>

					<section className={style.section}>
						<ComparativePieChart
							data={categoriesData}
							dataKey='sales'
							label={{ title: 'Ventas', subtitle: 'Este mes' }}
						/>

						<ComparativePieChart
							data={categoriesData}
							dataKey='money_collection'
							label={{ title: 'Recaudación', subtitle: 'Este mes' }}
						/>

						<ComparativePieChart
							data={categoriesData}
							dataKey='views'
							label={{ title: 'Visitas', subtitle: 'Este mes' }}
						/>
					</section>
				</div>
			</main>
		</div>
	);
};
export default Charts;
