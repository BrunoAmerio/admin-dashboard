import products from '../../data/products.json'
import categories from '../../data/categories.json'
import DataContainer from '../../components/DataContainer/DataContainer';

const ProductsCategories = () => {
	return (
		<main>
			<DataContainer data={products} title="Productos"/>
			<DataContainer data={categories} title="Categorias"/>
		</main>
	);
};

export default ProductsCategories;
