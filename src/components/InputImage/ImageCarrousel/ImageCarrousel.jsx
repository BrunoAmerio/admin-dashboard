import { useState } from 'react';
import style from './ImageCarrousel.module.scss';

// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Recibe por parametros un arreglo con las imagenes que debe mostrar
const ImageCarrousel = ({ images }) => {
	const [current, setCurrent] = useState(0);

	return images.length ? (
		<div className={style.container}>
			<img src={images[current]} height='450' />

			<div className={style.arrows}>
				<ArrowBackIosIcon
					sx={{ color: 'white' }}
					fontSize='large'
					onClick={() => {
						if (current >= 1) {
							setCurrent(current - 1);
						}
					}}
				/>

				<ArrowForwardIosIcon
					sx={{ color: 'white' }}
					fontSize='large'
					onClick={() => {
						if (current < images.length - 1) {
							setCurrent(current + 1);
						}
					}}
				/>
			</div>
		</div>
	) : null;
};

export default ImageCarrousel;
