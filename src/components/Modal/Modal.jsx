import style from './Modal.module.scss';
const Modal = ({ state, children }) => {
	if (state) {
		return <div className={style.container}>{children}</div>;
	}
	return null;
};

export default Modal;
