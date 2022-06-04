import { useState } from 'react';

import HeadDefault from '../../components/Head/Head';
import InputImage from '../../components/InputImage/InputImage';
import style from '../../styles/CreateProduct.module.scss';

const CreateNewProduct = () => {
	const [product, setProduct] = useState({
		title: '',
		description: '',
		price: 0,
		stock: 0,
		images: [],
	});

	const handleChange = event => {
		setProduct({
			...product,
			[event.target.name]: event.target.value,
		});
	};

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
					<input type='text' name='title' onChange={handleChange} />
				</div>

				<InputImage setState={setProduct} />

				<div className={style.numberContainer}>
					<div className={style.inputArea}>
						<label>Stock</label>
						<input type='number' name='stock' onChange={handleChange} />
					</div>

					<div className={style.inputArea}>
						<label>Precio</label>
						<input type='number' name='price' onChange={handleChange} />
					</div>
				</div>

				<div className={style.inputArea}>
					<label>Descripcion</label>
					<textarea
						type='text'
						rows={15}
						cols={70}
						name='description'
						maxLength={2000}
						onChange={handleChange}
					/>
				</div>

				<button className={style.button}>Crear Producto</button>
			</main>
		</div>
	);
};

export default CreateNewProduct;
