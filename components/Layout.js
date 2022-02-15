//MUI COMPONENTS
import Container from '@mui/material/Container';

//THEME
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';

//COMPONENTS
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

//CSS
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <ThemeProvider theme={theme}>  
                <Header />
                    <Container>  
                        <main className={styles.main}>                            
                            {children}
                        </main>
                    </Container>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout
