import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, CircularProgress } from "@mui/material";
import { useGetBreedsImagesMutation } from "../../reduxToolkit/breedService";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  dataImages: [];
}

function Dialogue(props: SimpleDialogProps) {
  const { open, setOpen, dataImages } = props;
  const [getBreedsImages, { data: images }] = useGetBreedsImagesMutation();
  const [imagesData, setImagesData] = React.useState([]);

  React.useEffect(() => {
    setImagesData(dataImages);
  }, [dataImages]);

  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    const res = await getBreedsImages("3");
    if ("data" in res) {
      let newArr = imagesData.concat(res?.data?.message);
      setImagesData(newArr);
    }
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Random Breed Images</DialogTitle>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {imagesData?.length > 0 ? (
          imagesData.map((item: String) => (
            <ImageListItem>
              <Box sx={{ width: "200px", minHeight: "200px" }}>
                <img
                  src={`${item}`}
                  // srcSet={`${item}`}
                  alt="Dog image"
                  // loading="lazy"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </ImageListItem>
          ))
        ) : (
          <Box sx={{ width: "100%",p:2 }}>
            <CircularProgress />
          </Box>
        )}
      </ImageList>
      <Box sx={{ pb: 4, pl: 2 }}>
        <Button variant="contained" onClick={getData}>
          Add New
        </Button>
      </Box>
    </Dialog>
  );
}

export default Dialogue;
