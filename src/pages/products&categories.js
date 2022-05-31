import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import style from '../styles/Products&Categories.module.scss';

// Components
import HeadDefault from '../components/Head/Head';
import ListElementContainer from '../components/ListElementContainer/ListElementContainer';

const ProductsCategories = () => {
	return (
		<div className={style.container}>
			<HeadDefault
				title='Products & Categories'
				description='View your products and categories in this page'
				meta='products categories admin '
			/>

			<main>
				<ListElementContainer
					data={productsData}
					label={{
						title: 'Productos',
						subtitles: ['title', 'stock', 'price'],
					}}
					redirectTo='products'
				/>
				<ListElementContainer
					data={categoriesData}
					label={{ title: 'Categorias', subtitles: ['name'] }}
					redirectTo='categories'
				/>
			</main>
		</div>
	);
};

export default ProductsCategories;
