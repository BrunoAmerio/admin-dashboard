import {
	initLogin,
	fetchDataUser,
	loginFailure,
} from '../reducers/loginReducer';

const loginHook = async (dispatch, userData) => {
	dispatch(initLogin());

	try {
		console.log('Debería buscar los datos del usuario');
		dispatch(fetchDataUser(userData));
		window.location.href = '/products&categories';
	} catch (error) {
		dispatch(loginFailure());
	}
};

export default loginHook;
