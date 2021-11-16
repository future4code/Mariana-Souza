import { createTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor, secondaryColor } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white" 
        },
        // secondary:{
        //     main: secondaryColor,
        //     contrastText: "white"
        // },
        text: {
            primary: primaryColor
        }
    }
});

export default theme;