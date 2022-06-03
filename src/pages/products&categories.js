import Link from 'next/link';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import style from '../styles/Products&Categories.module.scss';

// Components
import AddIcon from '@mui/icons-material/Add';
import HeadDefault from '../components/Head/Head';
import ListElementContainer from '../components/ListElementContainer/ListElementContainer';

const ProductsCategories = () => {
	return (
		<div className={style.container}>
			<h1 className='title'>Test</h1>
			<HeadDefault
				title='Products & Categories'
				description='View your products and categories in this page'
				meta='products categories admin '
			/>

			<main>
				<div>
					<Link href='/products/add'>
						<p>
							{' '}
							<AddIcon /> Nuevo producto
						</p>
					</Link>
					<ListElementContainer
						data={productsData}
						label={{
							title: 'Productos',
							subtitles: ['title', 'stock', 'price'],
						}}
						redirectTo='products'
					/>
				</div>

				<div>
					<Link href='/categoies/add'>
						<p>
							{' '}
							<AddIcon />
							Nueva Categoría
						</p>
					</Link>
					<ListElementContainer
						data={categoriesData}
						label={{ title: 'Categorias', subtitles: ['name'] }}
						redirectTo='categories'
					/>
				</div>
			</main>
		</div>
	);
};

export default ProductsCategories;
