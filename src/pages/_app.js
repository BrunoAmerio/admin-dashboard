import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store/index';

// Components
import Sidebar from '../components/SideBar/SideBar';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<div>
				<Sidebar />
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}

export default MyApp;
