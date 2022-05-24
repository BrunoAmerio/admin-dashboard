import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';


export default function SelectInput(arg) {
  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('');

  useEffect(()=>{
    setOptions(arg.products.map(p=>p.title))
  },[arg])

  return (
    <div>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        id="controllable-states-demo"
        options={options}
        size="small"
        sx={{ width: 200, mt:1, mb:1}}
        renderInput={(params) => <TextField {...params} label="Productos" />}
      />
    </div>
  );
}