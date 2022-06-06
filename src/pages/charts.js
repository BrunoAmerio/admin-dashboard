import { useEffect, useState } from 'react';

// Components
import ComparativeBarChart from '../components/ComparativeBarChart/ComparativeBarChart';
import ComparativePieChart from '../components/ComparativePieChart/ComparativePieChart';
import Head from 'next/head';

// DATA
import ecommerceData from '../data/ecommerce.json';
import categoriesData from '../data/categories.json';

// Icons
import style from '../styles/Chart.module.scss';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const Charts = () => {
	const [salesCategoriesThisMonth, setSalesCategoriesThisMonth] = useState([]);
	const [salesCategoriesHistoric, setSalesCategoriesHistoric] = useState([]);
	const [viewsCategoriesThisMonth, setViewsCategoriesThisMonth] = useState([]);
	const [viewsCategoriesHistoric, setViewsCategoriesHistoric] = useState([]);

	console.log(salesCategoriesHistoric, viewsCategoriesHistoric);

	useEffect(() => {
		const tempSalesCategoriesThisMonth = [];
		const tempViewsCategoriesThisMont = [];
		const tempSalesCategoriesHistoric = [];
		const tempViewsCategoriesHistoric = [];
		categoriesData.forEach(category => {
			tempSalesCategoriesThisMonth.push({
				name: category.name,
				total: category.sales.this_month.total,
			});

			tempViewsCategoriesThisMont.push({
				name: category.name,
				total: category.views.this_month.total,
			});

			// Accedemos a los datos historicos
			category.sales.historic_month.forEach(month => {
				tempSalesCategoriesHistoric.push({
					name: month.name,
					total: month.total,
				});
			});

			category.views.historic_month.forEach(month => {
				tempViewsCategoriesHistoric.push({
					name: month.name,
					total: month.total,
				});
			});
		});

		// Este mes
		setSalesCategoriesThisMonth(tempSalesCategoriesThisMonth);
		setViewsCategoriesThisMonth(tempViewsCategoriesThisMont);
		// Historicos
		setSalesCategoriesHistoric(tempSalesCategoriesHistoric);
		setViewsCategoriesHistoric(tempViewsCategoriesHistoric);
	}, []);

	return (
		<div className={style.container}>
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
						label='Recaudación'
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
						label='Visitas'
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
						label='Ventas'
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

				<ComparativePieChart dataKey='views' data={categoriesData} />
			</div>
		</div>
	);
};
export default Charts;
