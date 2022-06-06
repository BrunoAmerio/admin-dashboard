import '../styles/Globals.scss';
import { Provider } from 'react-redux';
import store from '../redux/store/index';

// Components
import Sidebar from '../components/SideBar/SideBar';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<div className='container'>
				<Sidebar />
				<div className='component'>
					<Component {...pageProps} />
				</div>
			</div>
		</Provider>
	);
}

export default MyApp;
