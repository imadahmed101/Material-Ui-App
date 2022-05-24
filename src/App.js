import { useState } from 'react';
import { Navbar, Sidebar, Feed, Rightbar, Add } from './components';
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material';

//https://www.youtube.com/watch?v=fzxEECHnsvU
//@50mins

function App() {

    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
        palette: {
            mode
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>

            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
};

export default App;