import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button } from '@mui/material';
import { useGetBreedsImagesMutation } from '../../reduxToolkit/breedService';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
//   selectedValue: string;
//   onClose: (value: string) => void;
setOpen:(value: boolean) => void;
dataImages : [];
}

function Dialogue(props: SimpleDialogProps) {
  const {open, setOpen,dataImages } = props;
  console.log('data ind :>> ', dataImages);
  const [getBreedsImages , {data: images}]=useGetBreedsImagesMutation();
  const [imagesData, setImagesData] = React.useState([])

  React.useEffect(() => {
    setImagesData(dataImages)
  }, [])
 
  const handleClose = () => {
    setOpen(false)
  };
  console.log('images :>> ', images);

 const getData = async () => {
    const res= await getBreedsImages('3');
    console.log('res :>> ', res);
    if("data" in res){
        console.log('object :>> ', res?.data?.message);
        let newArr=imagesData.concat(res?.data?.message)
            console.log('newArr :>> ', newArr);
            setImagesData(newArr)
    }
    // if(message?.length>0){
    //     let newArr=dataImages.concat(message)
    //     console.log('newArr :>> ', newArr);
    //     // setImagesData(newArr)
    // }
  
 }
console.log('dataImages :>> ', dataImages);
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Random Breed Images</DialogTitle>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imagesData.map((item:String) => (
        <ImageListItem >
         <Box sx={{width:"200px",height:"50px"}}>
         <img
            src={`${item}`}
            srcSet={`${item}`}
            alt='Dog image'
            // loading="lazy"
            width={"100%"}
            height={"100%"}
          />
         </Box>
        </ImageListItem>
      ))}
      <Box sx={{marginTop:4}} >
          <Button  onClick={getData}  >Add New</Button>
        </Box>
    </ImageList>
    
    </Dialog>
  );
}

export default Dialogue;