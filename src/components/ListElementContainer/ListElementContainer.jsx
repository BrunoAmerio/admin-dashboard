import style from './ListElementContainer.module.scss';
// Components
import Element from './Element/Element';
import { Pagination } from '@mui/material';

/*
	Este componente se encarga de dibujar el listado completo de elementos que le pasemos como parametro a travez de "data"
	El nombre de la lista se lo pasamos a travez de "label" junto con el nombre de las columnas que tendrá
	El nombre de las columnas debe ser igual a la propiedad del elemento que queremos mostrar
	Los enlista en un contenedor con un número máximo de 10 elementos por página.
	Y redirecciona al hacer click en los elementos hacía donde le indicamos a travez de "redirectTo"
*/

const ListElementContainer = ({
	data,
	label = {
		title: 'Undefined',
		subtitles: ['Undefined', 'Undefined', 'Undefined'],
	},
	redirectTo,
}) => {
	const limitPerPage = 10;
	const totalPages = Math.ceil(data.length / limitPerPage);

	// --------------
	// Styles In Line
	const stylesInLine = {
		subtitle: {
			display: 'grid',
			gridTemplateColumns: `repeat(${label.subtitles.length}, 1fr)`,
		},
	};

	return (
		<div className={style.container}>
			<div className={style.label}>
				<h1>{label?.title}</h1>

				<div className={style.subtitles} style={stylesInLine.subtitle}>
					{label.subtitles?.map(subtitle => (
						<h3 key={subtitle}>{subtitle}</h3>
					))}
				</div>
			</div>

			<div className={style.body}>
				{data.map(element => (
					<Element
						data={element}
						redirectTo={redirectTo}
						colums={label.subtitles}
						key={element.id}
					/>
				))}
			</div>

			<Pagination count={totalPages} />
		</div>
	);
};

export default ListElementContainer;
