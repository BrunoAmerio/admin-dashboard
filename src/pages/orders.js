import ListOrdersContainer from '../components/ListOrdersContainer/ListOrdersContainer';
import ordersData from '../data/orders.json';
import style from '../styles/Orders.module.scss';

const Orders = () => {
	return (
		<div className={style.container}>
			<h1 className='title'>Ordenes</h1>
			<ListOrdersContainer data={ordersData} title='Ordenes' />
		</div>
	);
};

export default Orders;
