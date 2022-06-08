// Components
import ListOrdersContainer from '../components/ListOrdersContainer/ListOrdersContainer';
import ComparativeBarChart from '../components/ComparativeBarChart/ComparativeBarChart';
import ComparativePieChart from '../components/ComparativePieChart/ComparativePieChart';
import LinealChart from '../components/LinealChart/LinealChart';
import Head from 'next/head';

// DATA
import ecommerceData from '../data/ecommerce.json';
import categoriesData from '../data/categories.json';
import ordersData from '../data/orders.json';

// Icons
import style from '../styles/Chart.module.scss';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const Charts = () => {
	return (
		<div className={style.container}>
			<h1 className='title'>Panel</h1>
			<Head>
				<title>Graficos - Admin Dashboard</title>
				<meta name='description' content='Admin Dashboard Charts Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

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

			<div className={style.mainChartsContainer}>
				<div className={style.slideChart}>
					<ComparativeBarChart
						title='Recaudación'
						XLegend={'Semana'}
						data1={{
							name: 'Este mes',
							value: ecommerceData.money_collection.this_month.weeks,
						}}
						data2={{
							name: 'Mes Pasado',
							value:
								ecommerceData.money_collection.historic_month[
									ecommerceData.money_collection.historic_month.length - 1
								].weeks,
						}}
					/>

					<ComparativeBarChart
						title='Visitas'
						XLegend={'Semana'}
						data1={{
							name: 'Este mes',
							value: ecommerceData.visitors.this_month.weeks,
						}}
						data2={{
							name: 'Mes pasado',
							value:
								ecommerceData.visitors.historic_month[
									ecommerceData.visitors.historic_month.length - 1
								].weeks,
						}}
					/>

					<ComparativeBarChart
						title='Ventas'
						XLegend={'Semana'}
						data1={{
							name: 'Este mes',
							value: ecommerceData.sales.this_month.weeks,
						}}
						data2={{
							name: 'Mes pasado',
							value:
								ecommerceData.sales.historic_month[
									ecommerceData.sales.historic_month.length - 1
								].weeks,
						}}
					/>
				</div>

				<ComparativePieChart
					dataKey='views'
					data={categoriesData}
					title='Vistas esta semana'
				/>
			</div>

			<div className={style.listContainer}>
				<ListOrdersContainer data={ordersData} title='Ultimas Ordenes' />
			</div>

			<div className={style.section}>
				<div className={style.item}>
					<div className={style.slideChart}>
						{categoriesData.map(category => {
							return (
								<LinealChart
									key={category.id}
									label='Semana'
									title={`Ventas en el mes de: ${category.name}`}
									data={category.sales.this_month.weeks}
								/>
							);
						})}
					</div>

					<ComparativePieChart
						dataKey={'sales'}
						data={categoriesData}
						title='Ventas'
					/>
				</div>

				<div className={style.item}>
					<div className={style.slideChart}>
						{categoriesData.map(category => {
							return (
								<LinealChart
									key={category.id}
									label='Semana'
									title={`Visitas en el mes de: ${category.name}`}
									data={category.views.this_month.weeks}
								/>
							);
						})}
					</div>

					<ComparativePieChart
						dataKey={'money_collection'}
						data={categoriesData}
						title='Recaudacion'
					/>
				</div>
			</div>
		</div>
	);
};
export default Charts;
