import HeadDefault from '../../components/Head/Head';
import style from '../../styles/CreateProduct.module.scss';

const CreateNewProduct = () => {
	// Se debe manejar el componente el inputFile de mejor manera, probablemente lo mejor sea convertirlo en un componente para manejarlo mejor
	return (
		<div className={style.container}>
			<HeadDefault
				title='Crear un producto'
				description='Creador de productos '
				meta='crear productos creador'
			/>

			<main>
				<div className={style.inputArea}>
					<label>Titulo del producto</label>
					<input type='text' />
				</div>

				<div className={style.inputFile}>
					<p>Seleccione las imagenes</p>
					<input type='file' accept='image/png, image/jpeg' multiple />
				</div>

				<div className={style.numberContainer}>
					<div className={style.inputArea}>
						<label>Stock</label>
						<input type='number' />
					</div>

					<div className={style.inputArea}>
						<label>Precio</label>
						<input type='number' />
					</div>
				</div>

				<div className={style.inputArea}>
					<label>Descripcion</label>
					<textarea type='text' rows={15} cols={50} />
				</div>

				<button className={style.button}>Crear Producto</button>
			</main>
		</div>
	);
};

export default CreateNewProduct;
