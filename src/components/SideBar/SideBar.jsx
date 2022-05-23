import { Drawer } from '@mui/material';
import { useState } from 'react';
import style from './Sidebar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
	const router = useRouter();
	const [state, setState] = useState(false);
	const avaible = router.pathname === '/';

	console.log(avaible);

	return (
		<div className={!avaible ? style.container : style.disable}>
			<button onClick={() => setState(!state)}>
				{' '}
				<MenuIcon fontSize='large' />
			</button>

			<Drawer open={state} onClose={() => setState(!state)}>
				<Link href='/chart'>
					<a className={style.item}>
						<BarChartIcon />
						<h2>Graficos</h2>
					</a>
				</Link>

				<Link href='/products&categories'>
					<a className={style.item}>
						<CategoryIcon />
						<h2>Productos y categorias</h2>
					</a>
				</Link>

				<Link href='/transfer'>
					<a className={style.item}>
						<PaidIcon />
						<h2>Transferencias</h2>
					</a>
				</Link>

				<Link href='/banner'>
					<a className={style.item}>
						<BurstModeIcon />
						<h2>Banner</h2>
					</a>
				</Link>

				<Link href='/documentation'>
					<a className={style.item}>
						<ArticleIcon />
						<h2>Documentacion</h2>
					</a>
				</Link>
			</Drawer>
		</div>
	);
};

export default Sidebar;
