import { useState } from 'react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

// Components
import HeadDefault from '../components/Head/Head';
import ListElementContainer from '../components/ListElementContainer/ListElementContainer';
import Link from 'next/link';
import Modal from '../components/Modal/Modal';

// Icons & Style
import style from '../styles/Products&Categories.module.scss';
import AddIcon from '@mui/icons-material/Add';

const ProductsCategories = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [category, setCategory] = useState('');
	console.log(category);

	return (
		<div className={style.container}>
			<h1 className='title'>Productos</h1>
			<HeadDefault
				title='Products & Categories'
				description='View your products and categories in this page'
				meta='products categories admin '
			/>

			<main>
				<div className={style.section}>
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

				<div className={style.section}>
					<p onClick={() => setOpenMenu(!openMenu)}>
						{' '}
						<AddIcon />
						Nueva Categoría
					</p>

					<Modal state={openMenu}>
						<div className={style.inputModal}>
							<input
								type='text'
								placeholder='Nombre de la categoria'
								onChange={e => setCategory(e.target.value)}
							/>
							<button>Crear</button>
						</div>
					</Modal>

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
