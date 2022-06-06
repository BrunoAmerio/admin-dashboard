import { Divider } from '@mui/material';
import styles from './SideBar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
	const email = useSelector(state => state.user.email);
	const router = useRouter();
	// Verificamos que la ruta no sea el index, que seriá el LOGIN
	const avaible = router.pathname === '/';

	return (
		<div className={!avaible ? styles.container : styles.disable}>
			<div className={styles.profile}>
				<h2>
					<PersonIcon /> {email || 'Undefined'}
				</h2>
			</div>

			<Divider />

			<Link href='/charts'>
				<a className={styles.item}>
					<BarChartIcon />
					<h2>Panel</h2>
				</a>
			</Link>

			<Divider variant='middle' />

			<Link href='/products&categories'>
				<a className={styles.item}>
					<CategoryIcon />
					<h2>Productos</h2>
				</a>
			</Link>
			<Divider variant='middle' />

			<Link href='/orders'>
				<a className={styles.item}>
					<PaidIcon />
					<h2>Ordenes</h2>
				</a>
			</Link>
			<Divider variant='middle' />

			<Link href='/banner'>
				<a className={styles.item}>
					<BurstModeIcon />
					<h2>Banner</h2>
				</a>
			</Link>
			<Divider variant='middle' />

			<Link href='/documentation'>
				<a className={styles.item}>
					<ArticleIcon />
					<h2>Documentación</h2>
				</a>
			</Link>
		</div>
	);
};

export default Sidebar;
