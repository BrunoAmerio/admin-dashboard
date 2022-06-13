import ListOrdersContainer from '../../components/ListOrdersContainer/ListOrdersContainer';
import LinealChart from '../../components/LinealChart/LinealChart';
import ComparativePieChart from '../../components/ComparativePieChart/ComparativePieChart';

// Data
import categoriesData from '../../data/categories.json';
import ordersData from '../../data/orders.json';
import style from '../../styles/Orders.module.scss';

const Orders = () => {
	return (
		<div className={style.container}>
			<h1 className='title'>Ordenes</h1>
			<ListOrdersContainer data={ordersData} title='Ordenes' />

			<div className={style.section}>
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
		</div>
	);
};

export default Orders;
