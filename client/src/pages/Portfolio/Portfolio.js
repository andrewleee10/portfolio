import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import birdBook from './images/birdBook.png'
import boardom from './images/logo_3.png'
import weekndr from './images/weekndrLogo.png'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  backpage: {
    backgroundColor: '#ffebcd'
  }
});

const Portfolio = () => {
  const classes = useStyles()
  return (
    <>
      <div>
        <Grid container
          className={classes.backpage}
          justify="center"
          alignItems="center"
          align="center">
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={boardom}
                  title="Boardom"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boardom Fighters
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Boardom Fighters is a front-end javascript application that allows users to get information on any board game using a board game API. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://djlongarms.github.io/Board-Game-Collection">
                  Visit Here!
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={weekndr}
                  title="Weekndr"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weekndr
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Weekndr is a full-stack javascript social media application where users can register and share postings of any public activity.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://thawing-sands-64181.herokuapp.com/">
                  Visit Here!
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={birdBook}
                  title="birdbook"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    BirdBook
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    BirdBook is a full-stack social media React.js application. Users can create a profile and share posts of anything bird related! 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://mysterious-tundra-80786.herokuapp.com/">
                  Visit Here!
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Portfolio