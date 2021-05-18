import './Home.css'
import logo from './images/log.png'
import andrew from './images/andrew.png'
import me from './images/me.jpg'
import me1 from './images/me1.jpeg'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    maxWidth: '100%',
    height: '75vh',
    backgroundColor: '#ffebcd'
  },
  paper: {
    padding: theme.spacing(1),
    color: '#121212',
    width: '100%'
  },
  background: {
    backgroundColor: '#ffebcd',
    height: '100%'
  },
  parallax1: {
    backgroundImage: `url(${me})`,
    minHeight: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  textDiv: {
    height: '30vh',
    backgroundColor: '#ffebcd',
    marginBottom: 0
  },
  parallax2: {
    backgroundImage: `url(${me1})`,
    minHeight: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

}))

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <div>
        <Grid container 
          className={classes.jumbotron}
          justify="center"
          alignItems="center"
          align="center">
          <Grid item xs={6}>
            <img src={logo} alt="logo"></img>
          </Grid>
          <Grid item xs={6}>
            <img src={andrew} alt='andrew'></img>
          </Grid>
        </Grid>
        <Grid container
          className={classes.parallax1}
        >
        </Grid>
        <Grid container
          className={classes.textDiv}
          justify="center"
          alignItems="center"
          align="center"
        >
          <Grid item xs={12}>
            <Typography>
              Hello World! My name is Andrew Lee and I am currently 23 years old. I graduated from the University of California, Riverside in 2020 with a degree in mechanical engineering.
            </Typography>
          </Grid>
        </Grid>
        <Grid container
          className={classes.parallax2}
        >
        </Grid>
        <Grid container
          className={classes.textDiv}
          justify="center"
          alignItems="center"
          align="center"
        >
          <Grid item xs={12}>
            <Typography>
              I am currently studying to become a web developer because I have always been intrigued with the process of
              building and creating. I hope one day I can combine my knowledge of web development with engineering.
              Some of my favorite pastimes are making music, gaming with friends, and watching a good movie.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Home
