import { useState } from 'react';
import Link from 'next/link';
import { MenuItem, Menu } from '@mui/material';
import style from './Element.module.scss';

// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

const Element = ({ data, redirectTo, colums }) => {
	// Controladores del menu
	const [anchorEl, setAnchorEl] = useState(null);
	const openMenu = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	// -------------

	// Styles In Line
	const stylesInLine = {
		display: 'grid',
		gridTemplateColumns: `repeat(${colums.length}, 1fr)`,
	};

	return (
		<div className={style.container}>
			<Link href={`${redirectTo}/${data.id}`}>
				<div style={stylesInLine} className={style.test}>
					{colums.map(name => {
						return <h1 key={name}>{data[name]}</h1>;
					})}
				</div>
			</Link>

			<div className={style.floatButton}>
				<MoreVertIcon fontSize='small' onClick={handleClick} />

				<Menu open={openMenu} anchorEl={anchorEl} onClose={handleClose}>
					<MenuItem>
						<EditIcon fontSize='small' /> Editar
					</MenuItem>

					<MenuItem>
						<DeleteIcon fontSize='small' /> Eliminar
					</MenuItem>

					<MenuItem>
						<DoNotDisturbOnIcon fontSize='small' /> Desabilitar
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default Element;
