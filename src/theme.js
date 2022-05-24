import { createTheme } from '@mui/material';

//if you want to use cusom theme then wrap <ThemeProvider theme={theme}> around <App /> in index.js
//pass {theme} as prop for the specific button u are using 
//use import { ThemeProvider } from '@mui/material';
//and import { theme } from './theme';
//select the theme colors by the following
//backgroundColor: theme.palette.otherColor.main


export const theme = createTheme ({
    palette: {
        primary:{
            main: "#BA68C8",
            light: "#FCB900"
        },
        secondary:{
            main: "#00D084",
        },
        otherColor:{
            main:"#DD951E"
        }
    }

})