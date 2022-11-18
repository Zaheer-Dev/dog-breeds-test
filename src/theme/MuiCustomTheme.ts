import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      // Name of the component ⚛️
      MuiButtonBase: {
        defaultProps: {
          // The default props to change
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
    
      },
      MuiButton:{
        styleOverrides:{
            root:{
                borderRadius:"20px",
                textTransform:"none"
            }
        }
      }
    
    },
  });