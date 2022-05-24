import ProductList from '../../components/ProductList/ProductList';
import style from '../../styles/Products.module.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SelectInput from '../../components/SelectInput/SelectInput'
import products from '../../data/products.json'

const Products = () => {
	return (
		<main className={style.productsContainer}>
			<div className={style.titleContainer}>
				<div className={style.options}>
					<h2>Lista de productos</h2>
					<SelectInput products={products}/>
					<button className={style.addBtn}> <AddCircleOutlineIcon/> Agregar</button>
				</div>
			</div>
			<ProductList products={products}/>
		</main>
	);
};

export default Products;
