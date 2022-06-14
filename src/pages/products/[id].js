import { useRouter } from 'next/router';

// Components
import HeadDefault from '../../components/Head/Head';
import LineChart from '../../components/LinealChart/LinealChart';
// Data
import productsData from '../../data/products.json';
import style from '../../styles/ProductInfo.module.scss';

/*
    Esta es la página donde se enlistan toda la informacion relevante acerca de los productos seleccionados
    * Falta manejar las imagenes de los productos
*/

const ProductsDetail = () => {
	const id = Number(useRouter().query.id);
	const productsSearching = productsData.filter(product => product.id === id);
	const result = productsSearching[0] || undefined;

	console.log(result);

	return result ? (
		<div>
			<HeadDefault
				title={result.title}
				description={`Analiticas para ${result.title}`}
			/>

			<main className={style.main}>
				<h1>{result.title}</h1>

				{!result.images ? <div className={style.imageDefault} /> : null}

				<div className={style.mainData}>
					<h4>Precio: ${result.price}</h4>
					<h4>Stock: {result.stock}</h4>
					<h4>Descuento: {result.discount}%</h4>
				</div>

				<p>{result.description}</p>

				<div className={style.chartsContainer}>
					<div className={style.section}>
						<h2>Vistas</h2>
						<p>Esta semana: {result.views.this_week} </p>
						<LineChart data={result.views.this_month.weeks} label='Semana' />
					</div>
					<div className={style.section}>
						<h2>Recaudacion</h2>
						<p>Esta semana: ${result.money_collection.this_week}</p>
						<LineChart
							data={result.money_collection.this_month.weeks}
							label='Semana'
						/>
					</div>
					<div className={style.section}>
						<h2>Ventas</h2>
						<p>Esta semana: {result.sales.this_week}</p>
						<LineChart data={result.sales.this_month.weeks} label='Semana' />
					</div>
				</div>
			</main>
		</div>
	) : (
		<h1>Cargando...</h1>
	);
};

export default ProductsDetail;
