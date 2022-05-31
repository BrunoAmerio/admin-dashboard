import Link from 'next/link';
import { useState } from 'react';
import style from './DataCard.module.scss';
import PropTypes from 'prop-types';

export default function DataCard({ data }) {
	const [mouseEnter, setMouseEnter] = useState(false);
	let { id, images, title, price, stock, discount } = data;
	if (!images) images = data.image;
	if (!title) title = data.name;
	return (
		<div
			onMouseLeave={() => setMouseEnter(false)}
			onMouseEnter={() => setMouseEnter(true)}
			className={style.container}
		>
			<div className={style.dataImg}></div>
			<div className={style.title}>
				<Link href={`/products&categories/${id}`}>
					<a>{title}</a>
				</Link>
			</div>
			<div className={style.option}>
				<p className={style.informationTitle}>
					{price || price === 0 ? 'Precio' : 'Descuento'}
				</p>
				<p>{price || price === 0 ? `$ ${price}` : `${discount} %`}</p>
			</div>
			{stock || stock === 0 ? (
				<div className={style.option}>
					<p className={style.informationTitle}>Stock</p>
					<p>{stock}</p>
				</div>
			) : null}
			{mouseEnter && (
				<div className={style.buttonContainer}>
					<button>Editar</button>
					<button>Deshabilitar</button>
					<button>Eliminar</button>
				</div>
			)}
		</div>
	);
}
DataCard.propTypes = {
	data: PropTypes.object.isRequired,
};
