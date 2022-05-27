import { useEffect, useState } from 'react';
import Head from 'next/head';
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
import PieChart from '../components/PieChart/PieChart';

const Charts = () => {
	const [salesCategories, setSalesCategories] = useState([]);
	const [viewsCategories, setViewsCategories] = useState([]);

	useEffect(() => {
		const tempSalesCategories = [];
		const tempViewsCategories = [];
		categoriesData.forEach(category => {
			tempSalesCategories.push({
				name: category.name,
				total: category.sales.this_month.total,
			});

			tempViewsCategories.push({
				name: category.name,
				total: category.views.this_month.total,
			});
		});

		setSalesCategories(tempSalesCategories);
		setViewsCategories(tempViewsCategories);
	}, []);

	console.log(salesCategories);

	return (
		<div className={style.container}>
			<Head>
				<title>Graficos - Admin Dashboard</title>
				<meta name='description' content='Admin Dashboard Charts Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

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

			<div className={style.slideChartContainer}>
				{/* Visitas */}
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

				{/* Recaudación  */}
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

			{/* Mapeo sobre todas las categorias para representar sus datos en gráficos */}
			<div className={style.slideChartContainer}>
				{categoriesData.map(category => {
					return (
						<MainCharstContainer
							key={category.id}
							barChart={{
								data: category.views.this_month,
								label: `Visitas en: ${category.name} este mes `,
							}}
							pieChart={{
								data: category.sales.historic_month,
								label: 'Ventas',
							}}
						/>
					);
				})}
			</div>

			<div className={style.pieContainer}>
				{salesCategories ? (
					<PieChart data={salesCategories} label='Ventas este mes' />
				) : null}

				{viewsCategories ? (
					<PieChart data={viewsCategories} label='Visitas este mes' />
				) : null}
			</div>
		</div>
	);
};
export default Charts;
