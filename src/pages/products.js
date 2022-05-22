import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import style from '../styles/Products.module.scss';

const Products = () => {
	let product1= {
		id: "asdadsa",
		title: "producto 1",
		description: "descripcion 1",
		discount : 20,
		images: ["url1","url2"],
		price: 20.3,
		stock: 10,
		sales:{
			this_week: 10,
			last_week: 24,
			this_month: {
				name: "Febrero",
				year: 2022,
				values: [20,30]
			},
			historic_month: [{febrero: 50}]
		},
		views:{
			this_week: 10,
			last_week: 24,
			this_month: {
				name: "Febrero",
				year: 2022,
				values: [20,30]
			},
			historic_month: [{febrero: 50}]
		},
		money_collection:{
			this_week: 10,
			last_week: 24,
			this_month: {
				name: "Febrero",
				year: 2022,
				values: [20,30]
			},
			historic_month: [{febrero: 50}]
		}
	}
	let products=[product1,product1]
	return (
		<main>
			<ProductList products={products}/>
		</main>
	);
};

export default Products;
