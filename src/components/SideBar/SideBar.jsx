import { Drawer, Divider } from '@mui/material';
import { useState } from 'react';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
	const email = useSelector(state => state.user.email);
	const router = useRouter();
	const [state, setState] = useState(false);
	const avaible = router.pathname === '/';

	return (
		<div className={!avaible ? styles.container : styles.disable}>
			<button onClick={() => setState(!state)}>
				{' '}
				<MenuIcon fontSize='large' />
			</button>

			<Drawer open={state} onClose={() => setState(!state)}>
				<div className={styles.profile}>
					<h2>
						<PersonIcon /> {email || 'Undefined'}
					</h2>
				</div>

				<Divider />

				<Link href='/charts'>
					<a className={styles.item}>
						<BarChartIcon />
						<h2>Graficos</h2>
					</a>
				</Link>

				<Divider variant='middle' />

				<Link href='/products&categories'>
					<a className={styles.item}>
						<CategoryIcon />
						<h2>Productos y categorias</h2>
					</a>
				</Link>
				<Divider variant='middle' />

				<Link href='/transactions'>
					<a className={styles.item}>
						<PaidIcon />
						<h2>Transferencias</h2>
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
						<h2>Documentacion</h2>
					</a>
				</Link>
			</Drawer>
		</div>
	);
};

export default Sidebar;
