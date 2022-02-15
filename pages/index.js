//MUI COMPONENTS
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

//CSS
import homeStyles from '../styles/Home.module.scss'

export default function Home() {    

  return (
      <div className={homeStyles.home}>        
        <div style={{background:"url(/img/banner.jpg)",height:"400px",backgroundPosition: "center",backgroundSize:"cover"}}></div>

        <Alert severity="warning" sx={{my:2}} className={homeStyles.alert}>
          <AlertTitle>Coronavirus (COVID-19)</AlertTitle>
          <a href="https://www.qub.ac.uk/home/coronavirus-faqs">COVID-19 FAQs</a>&nbsp;|&nbsp;<a href="https://www.qub.ac.uk/home/coronavirus-faqs/asymptomatic-testing">Asymptomatic Testing</a> | <a className="link" href="https://forms.office.com/Pages/ResponsePage.aspx?id=6ner6qW040mh6NbdI6HyhttEmBrbsE9JlZQYslaBsRRUNDhPVFcxVTZGR1dKQ1BYVUowU1RRUzgwVCQlQCN0PWcu">Self-Reporting Portal</a> |&nbsp;<a className="link" href="https://www.qub.ac.uk/sites/my-queens/working-together/get-ready/">Teaching Arrangements, Arrival and Vaccination</a>
        </Alert>


        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
              <Card sx={{p:3,bgcolor:'grey.light',boxShadow:0}}>                
                <CardMedia
                  component="img"
                  image="/img/bright-minds.png"
                  sx={{mb:2}}
                />
                <Typography variant="subtitle1" sx={{color:'brand.primary'}}>Welcome to Queen's: New Students</Typography>
                <Typography>Helping you get settled at Queen's - find out everything you need to know!</Typography>
              </Card> 
          </Grid>
          <Grid item xs={12} md={4}>
              <Card sx={{p:3,bgcolor:'grey.light',boxShadow:0}}>                
                <CardMedia
                  component="img"
                  image="/img/ug-open-days.jpg"
                  sx={{mb:2}}
                />
                <Typography variant="subtitle1" sx={{color:'brand.primary'}}>Welcome to Queen's: New Students</Typography>
                <Typography>Helping you get settled at Queen's - find out everything you need to know!</Typography>
              </Card> 
          </Grid>
          <Grid item xs={12} md={4}>
              <Card sx={{p:3,bgcolor:'grey.light',boxShadow:0}}>                
                <CardMedia
                  component="img"
                  image="/img/upskill-your-future.png"
                  sx={{mb:2}}
                />
                <Typography variant="subtitle1" sx={{color:'brand.primary'}}>Welcome to Queen's: New Students</Typography>
                <Typography>Helping you get settled at Queen's - find out everything you need to know!</Typography>
              </Card> 
          </Grid>
        </Grid>
    </div>
  )
}
