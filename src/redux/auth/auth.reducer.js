import {newObject} from '../utils'

export const authStart = (state, action) => {
	return newObject(state, {
		...state,
		error: null,
		loading: true,
	});
};

export const authSuccess = (state, action) => {
	return newObject(state, {
		...state,
		token: action.token,
		detail: action.detail,
		error: null,
		loading: false,
		redirect: true,
	});
};
export const authFail = (state, action) => {
	return newObject(state, {
		...state,
		error: action.error,
		loading: false,
	});
};

export const authLogout = (state, action) => {
	return newObject(state, {
		...state,
		token: null,
		redirect: false,
	});
};