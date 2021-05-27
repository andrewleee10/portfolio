import React from 'react';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ContactAPI from '../../utils/ContactAPI'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  title: {
    backgroundColor: '#ffebcd'
  },
  textForm: {
    width: '45%',
    marginTop: '20px'
  },
  mainDiv: {
    backgroundColor: '#ffebcd',
    height: '100vh',
    maxWidth: '100%'
  },
  submit: {
    marginTop: '10px'
  }
}))


const Contact = () => {
  const classes = useStyles()

  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = ({ target }) => {
    setContactState({ ...contactState, [target.name]: target.value })
  }

  const handleContact = event => {
    event.preventDefault()

    const newContact = {
      name: contactState.name,
      email: contactState.email,
      message: contactState.message
    }
    ContactAPI.createContact(newContact)
      .then(({ data }) => {
        console.log(data)

      })
      .catch(err => console.log(err))

  }

  return (
    <div className={classes.mainDiv}>
      <Grid container
        className={classes.title}
        justify='center'
        alignItems='center'
        align='center'>
        <Grid item xs={12}>
          <Typography variant='h2' gutterBottom>
            Contact Me!
          </Typography>
        </Grid>
      </Grid>
      <Grid container
        className={classes.form}
        justify='center'
        alignItems='center'
        align='center'>
        <Grid item sm={12}>
          <form onSubmit={handleContact} className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField 
                value={contactState.name.value} 
                onChange={handleInputChange} 
                id="standard-basic" 
                label="Name" />
            </div>
            <div>
              <TextField 
                id="standard-basic" 
                label="Email"
                value={contactState.email.value} 
                onChange={handleInputChange} />
            </div>
            <div className={classes.textForm}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                label="Leave a message!"
                variant="outlined"
                fullWidth={true}
                value={contactState.message.value}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.submit}>
              <Button onClick={(event) => handleContact(event)} className={classes.submit} variant="outlined" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact