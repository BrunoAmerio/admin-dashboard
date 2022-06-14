// Components
import HeadDefault from '../../components/Head/Head';
import ListOrdersContainer from '../../components/ListOrdersContainer/ListOrdersContainer';
import ComparativeLineChart from '../../components/ComparativeLineChart/ComparativeLineChart';
import ComparativePieChart from '../../components/ComparativePieChart/ComparativePieChart';

// Icons
import PaidIcon from '@mui/icons-material/Paid';

// Data
import categoriesData from '../../data/categories.json';
import ordersData from '../../data/orders.json';
import style from '../../styles/Orders.module.scss';

const Orders = () => {
	return (
		<div className={style.container}>
			<HeadDefault
				title='Ordenes'
				description='Listado de las ordenes que realizadas'
				meta='ordenes panel administrador listado graficos compras '
			/>

			<div className='titleContainer'>
				<div className='icon'>
					<PaidIcon fontSize='large' />
				</div>
				<div className='title'>
					<h1>Ordenes</h1>
					<p>
						Listado de las ordenes que se realizaron y graficos representativos
						con informacion relevante
					</p>
				</div>
			</div>

			<ListOrdersContainer data={ordersData} title='Ordenes' />
			<div className='body'>
				<section className='section'>
					<div className='slideContainer'>
						{categoriesData.map(category => {
							return (
								<ComparativeLineChart
									key={category.id}
									data1={category.sales.this_month.weeks}
									label={{
										title: 'Ventas',
										subtitle: `Este mes de : ${category.name}`,
									}}
								/>
							);
						})}
					</div>
				</section>

				<section className='section'>
					<ComparativePieChart
						dataKey={'sales'}
						data={categoriesData}
						label={{
							title: 'Ventas',
							subtitle: 'Este mes',
						}}
					/>
				</section>
			</div>
		</div>
	);
};

export default Orders;
