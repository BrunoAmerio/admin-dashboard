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
		window.location.href = '/charts';
	} catch (error) {
		dispatch(loginFailure());
	}
};

export default loginHook;
