import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import styles from './SideBar.module.scss';

const Sidebar = () => {
	const [lastSelected, setLastSelected] = useState();
	const email = useSelector(state => state.user.email);
	const router = useRouter();

	// Verificamos que la ruta no sea el index, que seriá el LOGIN
	const isAvaible = router.pathname !== '/';

	useEffect(() => {
		// Con este condicional verificamos que no se trate de una ruta dinamica, es decir /products/[id]
		if (isAvaible && !router.pathname.includes('[')) {
			// Obtenemos el path y el elemento al que hace referencia
			const path = router.pathname.slice(1);
			const itemSelected = document.querySelector(`#${path}`);

			if (itemSelected && itemSelected !== lastSelected) {
				itemSelected.classList.add(styles.selected);

				if (lastSelected) {
					lastSelected.classList.remove(styles.selected);
				}

				setLastSelected(itemSelected);
			}
		}
	}, [router]);

	if (isAvaible) {
		return (
			<nav className={styles.container}>
				<div className={styles.profile}>
					<h2>
						<PersonIcon /> {email || 'Undefined'}
					</h2>
				</div>

				<Link href='/charts'>
					<div className={styles.item} id='charts'>
						<BarChartIcon />
						<h2>Panel</h2>
					</div>
				</Link>

				<Link href='/products'>
					<div className={styles.item} id='products'>
						<CategoryIcon />
						<h2>Productos</h2>
					</div>
				</Link>

				<Link href='/orders'>
					<div className={styles.item} id='orders'>
						<PaidIcon />
						<h2>Ordenes</h2>
					</div>
				</Link>

				<Link href='/banner'>
					<div className={styles.item} id='banner'>
						<BurstModeIcon />
						<h2>Banner</h2>
					</div>
				</Link>

				<Link href='/documentation'>
					<div className={styles.item} id='documentation'>
						<ArticleIcon />
						<h2>Documentación</h2>
					</div>
				</Link>
			</nav>
		);
	}

	return null;
};

export default Sidebar;
