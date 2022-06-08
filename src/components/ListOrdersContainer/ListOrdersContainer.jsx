import { useState, useEffect } from 'react';
import Element from './Element/Element';
import { Pagination } from '@mui/material';

import style from './ListOrdersContainer.module.scss';

const ListOrdersContainer = ({ data, title }) => {
	const [page, setPage] = useState([]);
	const limitPerPage = 10;
	const totalPages = Math.ceil(data.length / limitPerPage);

	const setCurrentPage = event => {
		const pageNum = Number(event.target.innerText);
		const max = limitPerPage * pageNum;
		const min = max - limitPerPage;
		setPage(data.slice(min, max));
	};

	useEffect(() => {
		setPage(data.slice(0, 10));
	}, []);

	return (
		<div className={style.container}>
			<div className={style.label}>
				<h2>{title}</h2>
				<div className={style.subtitle}>
					<h3>Provincia</h3>
					<h3>Status</h3>
					<h3>Total</h3>
					<h3>Ciudad</h3>
				</div>
			</div>

			{page?.map(item => {
				return <Element data={item} key={item.id} />;
			})}

			<div className={style.pagination}>
				<Pagination
					count={totalPages}
					onChange={setCurrentPage}
					hidePrevButton
					hideNextButton
				/>
			</div>
		</div>
	);
};

export default ListOrdersContainer;
