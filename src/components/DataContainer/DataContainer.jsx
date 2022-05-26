import DataList from '../../components/DataList/DataList';
import style from './DataContainer.module.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SelectInput from '../../components/SelectInput/SelectInput'
import PropTypes from "prop-types";

const DataContainer = ({data, title}) => {
	return (
        <div className={style.dataContainer}>
            <div className={style.titleContainer}>
                <div className={style.options}>
                    <h2>{title}</h2>
                    <SelectInput data={data}/>
                    <button className={style.addBtn}> <AddCircleOutlineIcon/> Agregar</button>
                </div>
            </div>
            <DataList data ={data}/>
        </div>
	);
};

export default DataContainer;

DataContainer.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  };