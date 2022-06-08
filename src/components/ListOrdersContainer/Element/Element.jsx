import style from './Element.module.scss';
import Link from 'next/link';

const Element = ({ data }) => {
	return (
		<Link href={`orders/${data.id}`}>
			<div className={style.container}>
				<h2>{data.province}</h2>
				<h2 className={style[data.status]}>{data.status}</h2>
				<h2>${data.total}</h2>
				<h2>{data.city}</h2>
			</div>
		</Link>
	);
};

export default Element;
