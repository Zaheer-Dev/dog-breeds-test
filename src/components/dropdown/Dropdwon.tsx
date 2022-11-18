import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useGetSubBreedsMutation } from '../../reduxToolkit/breedService';
import { setSubBreeds,setBreedsSubBreeds } from '../../reduxToolkit/subBreedsService';
import { useDispatch } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, breedName: string[], theme: Theme) {
  return {
    fontWeight:
      breedName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface Props {
    nameAndLable: String;
    breedList: string[];
  }

export default function Dropdown(props:Props) {
  const theme = useTheme();
  const dispatch=useDispatch()
  const [breedName, setBreedName] = React.useState<string[]>([]);
  const [subBreedName, setSubBreedName] = React.useState<string[]>([]);
    const [getSubBreeds,{data={}}]=useGetSubBreedsMutation();
  const handleChange =async (event: SelectChangeEvent<typeof breedName>) => {
    const {
      target: { value },
    } = event;
    if(props.nameAndLable === "Breed"){
      setBreedName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      const res=await getSubBreeds(value)
      dispatch(setSubBreeds(res))
    } else {
      setSubBreedName(typeof value === 'string' ? value.split(',') : value,)
      const payload = {
        breed: breedName,
        subBreed: subBreedName
      }
      dispatch(setBreedsSubBreeds(payload))
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{props.nameAndLable}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={props.nameAndLable === "Breed"? breedName : subBreedName}
          onChange={handleChange}
          input={<OutlinedInput label={`${props.nameAndLable}`} />}
          MenuProps={MenuProps}
        >
          {props.breedList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, breedName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}