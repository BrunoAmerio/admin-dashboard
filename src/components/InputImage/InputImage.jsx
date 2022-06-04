import { useState } from 'react';
import style from './InputImage.module.scss';
import ImageCarrousel from './ImageCarrousel/ImageCarrousel';

// Este componente recibe toma todas las imagenes seleccionadas, y nos muestra una previsualizacion
// Ademas recive por parametro un estado para setear las imagenes que seleccionó el usuario
// Luego hace uso del componente carrousel para mostrar las imagenes
const InputImage = ({ setState }) => {
	const [images, setImages] = useState([]);

	const handleChange = event => {
		if (event.target.files.length) {
			setImages({});
			const files = event.target.files;
			const previewReady = [];

			for (let i = 0; i < files.length; i++) {
				const preview = URL.createObjectURL(files[i]);
				previewReady.push(preview);
			}

			setImages(previewReady);
		}
	};

	return (
		<div className={style.container}>
			<div>
				<p>Seleccione las imagenes</p>
				<input
					type='file'
					accept='image/png, image/jpeg'
					onChange={handleChange}
					multiple
				/>
			</div>

			<ImageCarrousel images={images} />
		</div>
	);
};

export default InputImage;
