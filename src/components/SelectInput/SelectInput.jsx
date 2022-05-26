import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDataData} from '../../redux/reducers/dataReducer';

export default function SelectInput(arg) {
  const [options, setOptions] = useState([])
  const [values, setValues] = useState([])
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const p= useSelector(state=>state.data)
  console.log("Estee",p.products)
  useEffect(()=>{
    setOptions(arg.data.map(p=>p.title||p.name))
    dispatch(fetchDataData({type:arg.data[0].title?"isProduct":"isCategorie",data:arg.data}))
  },[arg])
 

  return (
    <div>
      <Autocomplete
        onChange={(event, newInputValue) => {
          console.log(event,newInputValue)
          setInputValue(newInputValue)}}
        id="controllable-states-demo"
        options={options}
        size="small"
        sx={{ width: 200, mt:1, mb:1}}
        renderInput={(params) => <TextField {...params} label="Todos" />}
      />
    </div>
  );
}