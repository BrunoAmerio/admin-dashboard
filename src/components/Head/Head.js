import Head from 'next/head';

/*
    En titulo recibe como parametro el nombre de la página actual
    En descripcion le pasamos un poco respecto a lo que se econtrará en esta seccion
    Y en meta le debemos pasar un texto con palabras claves, como por ejemplo:
    "palabra clave 1 palabra clave 2 palabra clave 3"
*/
const HeadDefault = ({ title, description, meta }) => {
	return (
		<Head>
			<title>{title || 'Default Text'} - Admin Dashboard</title>
			<meta name='description' content={description || ''} />
			<meta name='keywords' content={meta + ' admin ecommerce' || ''} />
		</Head>
	);
};

export default HeadDefault;
