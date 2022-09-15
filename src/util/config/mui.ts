import {ThemeOptions} from "@mui/material/styles";
import {createTheme} from "@mui/material";

const options : ThemeOptions = {
    components : {},
    palette : {
        mode : "light",
        error : {
            main : "#ff1f5a"
        },
        background : {
            default : "#1f4287",
            paper : "#775ada"
        },
        divider : "",
        text : {
            primary : "#ffffff",
            disabled : "#f2a2e4",
            secondary : "#1f4287",
        },
        primary : {
            main : "#1f4287"
        },
        success : {
            main : "#83e85a"
        },
        secondary : {
            main : "#f5f5f5"
        },
        warning : {
            main : '#ffb174'
        }
    },
    zIndex : {
        tooltip : 99999,
        modal : 9999,
        drawer : 999,
        appBar : 99
    },
    spacing : 2,
    status : {
        success : '#83e85a',
        danger : '#ff1f5a',
        pending : '#ffb174'
    },
    typography : {},
    shape  : {
        borderRadius : 15
    }
};

export const Theme = createTheme(options);