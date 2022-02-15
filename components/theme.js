import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        brand: {
            primary: '#d6000d',
            secondary: red[900],
        },
        grey: {
            dark: '#999',
            light: '#efefef',
        }
    },
});

export default theme;