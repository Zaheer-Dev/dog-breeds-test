import { Button } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Dialogue from '../components/dialogue/Dialogue'
import Dropdown from '../components/dropdown/Dropdwon';
import { useGetBreedsQuery,useGetBreedsImagesMutation } from '../reduxToolkit/breedService';
import { RootState } from '../reduxToolkit/store';

export interface IAppProps {
}

export default function Home (props: IAppProps) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {data={},isLoading}=useGetBreedsQuery(' ')
  const [getBreedsImages , {data:{message=[]}={}}] = useGetBreedsImagesMutation()
  const subBreeds=useSelector((state:RootState)=>state?.subBreedsService.subBreeds || [])
  const generateBreedImages = async ()=>{
    setOpen(true);
    const getImages = await getBreedsImages(subBreeds?.length)
  }
  return (
    <>
    
    <Box sx={{ width:'100%',display:'flex',justifyContent:'center',marginTop:'50px'}}>
      <Dropdown nameAndLable='Breed' breedList={data?.message ? Object.keys(data?.message):[]} />
      <Dropdown nameAndLable='Sub Breed' breedList={subBreeds || []}/>
      <Box sx={{display:"flex",alignItems:"center"}} >
      <Button variant='contained' onClick={generateBreedImages}>Generate {subBreeds?.length || 1} Images</Button>
      </Box>
    </Box>
    <Dialogue
    dataImages = {message}
        // selectedValue={selectedValue}
        setOpen={setOpen}
        open={open}
        // onClose={handleClose}
      />
    </>
  );
}
