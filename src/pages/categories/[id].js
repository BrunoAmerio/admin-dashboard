import { useRouter } from 'next/router';
import style from '../../styles/CategoryDetail.module.scss';

// Components
import ListElementContainer from '../../components/ListElementContainer/ListElementContainer';
import LinealChart from '../../components/LinealChart/LinealChart';

// Data
import categoriesData from '../../data/categories.json';
import productData from '../../data/products.json';

const CategoryDetail = () => {
	const id = Number(useRouter().query.id);
	const categorySelected = categoriesData.filter(
		category => category.id === id
	);
	const listOfProducts = [];

	if (categorySelected.length) {
		productData.forEach(product => {
			if (product.category === categorySelected[0].name) {
				listOfProducts.push(product);
			}
		});
	}

	if (listOfProducts.length) {
		console.log(listOfProducts);
		return (
			<div className={style.container}>
				<div className='titleContainer'></div>
				<ListElementContainer
					data={listOfProducts}
					label={{
						title: `${categorySelected[0].name}`,
						subtitles: ['title', 'stock', 'price'],
					}}
					redirectTo='products'
				/>

				<div className={style.chartContainer}>
					<LinealChart
						data={categorySelected[0].money_collection.this_month.weeks}
						label={{
							title: 'Recaudación',
							subtitle: `Este semana: ${categorySelected[0].money_collection.this_week}`,
						}}
					/>

					<LinealChart
						data={categorySelected[0].sales.this_month.weeks}
						label={{
							title: 'Ventas',
							subtitle: `Este semana: ${categorySelected[0].sales.this_week}`,
						}}
					/>

					<LinealChart
						data={categorySelected[0].views.this_month.weeks}
						label={{
							title: 'Visitas',
							subtitle: `Este semana: ${categorySelected[0].views.this_week}`,
						}}
					/>
				</div>
			</div>
		);
	}

	return <h1>Cargando...</h1>;
};

export default CategoryDetail;
