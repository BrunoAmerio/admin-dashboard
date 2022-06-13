import { useRouter } from 'next/router';

const OrderInfo = () => {
	const { id } = useRouter().query;
	return (
		<div>
			<h1>Esta sería la informacion de la orden {id} </h1>
		</div>
	);
};

export default OrderInfo;
