import React from 'react'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

//MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Footer = () => {
  return (
    <ThemeProvider theme={theme}>

        <footer>

            <Box sx={{backgroundColor:'grey.dark'}}>

                <Container>
    
            <Grid container>
        
                <Grid item xs={3}>
                    <div class="grid-x grid-margin-x">
                        <div class="xlarge-12 medium-6 cell small-order-1 large-order-1 xlarge-order-1">
                        <div class="logo">
                            <a href="https://www.qub.ac.uk/" aria-label="Footer links - Home"></a>
                        </div>
                        </div>
                        <div class="xlarge-12 cell small-order-2 medium-order-3 xlarge-order-2">
                        <ul class="location-phone">
                            <li>University Road, Belfast<br/>Northern Ireland, BT7 1NN</li>
                            <li><a href="tel:02890245133">+44 (0)28 9024 5133</a></li>
                        </ul>
                        </div>
                        <div class="xlarge-12 medium-6 cell small-order-3 medium-order-2 xlarge-order-3">
                        <ul class="social-links-circled">
                            <li><a class="facebook" href="https://www.facebook.com/QUBelfast/" aria-label="Footer links - Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a class="twitter" href="https://twitter.com/QUBelfast" aria-label="Footer links - Twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a class="instagram" href="https://www.instagram.com/qubelfast/" aria-label="Footer links - Instagram"><i class="fab fa-instagram"></i></a></li>
                            <li><a class="youtube" href="https://www.youtube.com/user/Come2Queens" aria-label="Footer links - Youtube"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </Grid>
        
                <Grid item item xs={9}>

                    <Grid container>
            
                        <Grid item xs={4}>
                            <div class="footer-list">
                            <h6 data-toggle="title-1 menu-1" aria-expanded="false" aria-controls="title-1 menu-1"><span id="title-1" data-toggler=".expanded" data-expanded="hts8c8-expanded">Top links</span></h6>
                            <ul id="menu-1" data-toggler=".expanded" data-expanded="ragd5p-expanded">
                                <li><a href="https://www.qub.ac.uk/sites/QUBJobVacancies/">Jobs</a></li>
                                <li><a href="https://www.qub.ac.uk/about/Semester-dates/">Semester dates</a></li>
                                <li><a href="https://www.qub.ac.uk/contact/">Contact us</a></li>
                                <li><a href="https://www.qub.ac.uk/about/Visit-Us/">Visit us</a></li>
                                <li><a href="https://www.qub.ac.uk/about/Leadership-and-structure/University-department-list/">Schools / Departments</a></li>
                            </ul>
                            </div>
                        </Grid>
            
                        <Grid item xs={4}>
                            <div class="footer-list">
                            <h6 data-toggle="title-2 menu-2" aria-expanded="false" aria-controls="title-2 menu-2"><span id="title-2" data-toggler=".expanded" data-expanded="3j4p8f-expanded">Study</span></h6>
                            <ul id="menu-2" data-toggler=".expanded" data-expanded="7gbqpw-expanded">
                                <li><a href="https://www.qub.ac.uk/Study/Undergraduate/">Undergraduate</a></li>
                                <li><a href="https://www.qub.ac.uk/Study/PostgraduateStudy/">Postgraduate</a></li>
                                <li><a href="https://www.qub.ac.uk/International/International-students/">International students</a></li>
                                <li><a href="https://www.qub.ac.uk/Study/PostgraduateStudy/Postgraduate-research/">Find a PhD</a></li>
                                <li><a href="https://www.qub.ac.uk/courses/">Find a course</a></li>
                            </ul>
                            </div>
                        </Grid>
            
                        <Grid item xs={4}>
                            <div class="footer-list">
                            <h6 data-toggle="title-3 menu-3" aria-expanded="false" aria-controls="title-3 menu-3"><span id="title-3" data-toggler=".expanded" data-expanded="jjlehb-expanded">Information</span></h6>
                            <ul id="menu-3" data-toggler=".expanded" data-expanded="ll5w3g-expanded">
                                <li><a href="https://www.qub.ac.uk/about/website/privacy-and-cookies/">Privacy and cookies</a></li>
                                <li><a href="https://www.qub.ac.uk/about/website/accessibility-statement/">Website accessibility</a></li>
                                <li><a href="https://www.qub.ac.uk/about/Leadership-and-structure/Registrars-Office/Information-Compliance-Unit/Freedom-of-Information/">Freedom of information </a></li>
                                <li><a href="https://www.qub.ac.uk/directorates/FinanceDirectorate/visitors/FileStore-Visitors/Procurement/Filetoupload,1280962,en.pdf">Modern slavery statement</a></li>
                                <li><a href="https://www.qub.ac.uk/directorates/HumanResources/diversity-and-inclusion/">Equality, Diversity and Inclusion</a></li>
                            </ul>
                            </div>
                        </Grid>
                    </Grid>            
                </Grid>
            </Grid>
        
        
            <div class="grid-x grid-margin-x margin-top-2">
                <div class="xxlarge-7 large-9 medium-10 cell">
                
                <div class="grid-x grid-margin-x">
                    <div class="cell">
                    <small>Queen's University Belfast is registered with the Charity Commission for Northern Ireland NIC101788.</small>
                    </div>
                    <div class="cell shrink">
                    <small>VAT registration number: GB 254 7995 11</small>
                    </div>      		
                    <div class="cell shrink">
                    <small>EORI Numbers GB254799511000</small>
                    </div>      		
                    <div class="cell shrink">
                    <small>XI254799511000</small>
                    </div>  
                </div> 
                
                </div>
                <div class="medium-12 text-center medium-text-right cell">
                <a href="#top" class="back-to-top-link" data-smooth-scroll="u1m4wj-smooth-scroll" id="t58spy-smooth-scroll"><span class="show-for-sr">Return to top</span><i class="far fa-arrow-up"></i></a>
                </div>
            </div>
        


                </Container>
            </Box>
        </footer>
    </ThemeProvider>
  )
}

export default Footer