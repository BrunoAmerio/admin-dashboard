// Components
import HeadDefault from '../components/Head/Head';
import ListElementContainer from '../components/ListElementContainer/ListElementContainer';

// Data
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

// Icons & Style
import style from '../styles/Products&Categories.module.scss';
import CategoryIcon from '@mui/icons-material/Category';

const ProductsCategories = () => {
	return (
		<div className={style.container}>
			<HeadDefault
				title='Products & Categories'
				description='View your products and categories in this page'
				meta='products categories admin '
			/>

			<div className='titleContainer'>
				<div className='icon'>
					<CategoryIcon fontSize='large' />
				</div>
				<div className='title'>
					<h1>Productos y Categorias</h1>
					<p>
						Listado de todos los productos y categorías creadas en el ecommerce
					</p>
				</div>
			</div>

			<main>
				<div className={style.section}>
					<ListElementContainer
						data={productsData}
						label={{
							title: 'Productos',
							subtitles: ['title', 'stock', 'price'],
						}}
						buttonProperties={{
							title: 'Agregar producto',
							link: '/products/add',
						}}
						redirectTo='products'
					/>
				</div>

				<div className={style.section}>
					<ListElementContainer
						data={categoriesData}
						label={{
							title: 'Categorias',
							subtitles: ['name', 'products'],
						}}
						buttonProperties={{
							title: 'Agregar categoría',
							link: '/category/add',
						}}
						redirectTo='categories'
					/>
				</div>
			</main>
		</div>
	);
};

export default ProductsCategories;
