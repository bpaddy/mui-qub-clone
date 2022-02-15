//MUI COMPONENTS
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//COMPONENTS
import Nav from '../components/Nav';

//CSS
import headerStyles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <>
            <Box sx={{bgcolor: 'brand.primary'}}>
            <Container>            
                <Grid container alignItems="flex-end">
                <Grid item xs={3}>
                    <img
                    src='/img/logo.svg'
                    alt="Picture of the author"
                    width={200}
                    style={{marginTop: "20px",marginBottom: "20px"}}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Nav />
                </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    )
}

export default Header
