import Head from 'next/head';
import styles from '../styles/Login.module.scss';
import { useDispatch } from 'react-redux';
import loginHook from '../redux/apiCalls/loginHook';

// Icons & Images
import KeyIcon from '@mui/icons-material/Key';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import image from '../styles/images/Startup_Flatline.svg';
import Image from 'next/image';

const Home = () => {
	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();
		// Seleccionamos los input del documento
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		loginHook(dispatch, { email, password });
	};

	return (
		<div>
			<Head>
				<title>Inicio de Sesion - Admin Dashboard</title>
				<meta name='description' content='Admin Dashboard' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.imageContainer}>
					<h1>Panel de control</h1>
					<Image src={image} width={600} height={400} />
				</div>

				<div className={styles.container}>
					<h1>Bienvenido!</h1>
					<form>
						<div className={styles.inputContainer}>
							<AlternateEmailIcon sx={{ color: 'white' }} fontSize='large' />
							<input placeholder='Email' id='email' />
						</div>

						<div className={styles.inputContainer}>
							<KeyIcon sx={{ color: 'white' }} fontSize='large' />
							<input placeholder='Contraseña' type='password' id='password' />
						</div>
						<button className={styles.button} onClick={handleSubmit}>
							Iniciar Sesion
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Home;
