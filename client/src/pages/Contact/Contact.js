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

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
    contacts: []
  })

  const handleInputChange = ({ target }) => {
    setContact({ ...contact, name: '', email: '', message: '' })
  }

  const handleContact = event => {
    event.preventDefault()

    ContactAPI.createContact()
      .then(({ data: contact }) => {
        const contacts = [...contact.contacts]
        contacts.push(contact)
        setContact({...contact, contacts, name: '', email: '', message: ''})
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
              <TextField onChange={handleInputChange} id="standard-basic" label="Name" />
            </div>
            <div>
              <TextField onChange={handleInputChange} id="standard-basic" label="Email" />
            </div>
            <div className={classes.textForm}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                label="Leave a message!"
                variant="outlined"
                fullWidth={true}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.submit}>
              <Button onClick={handleContact} className={classes.submit} variant="outlined" color="primary">
                Primary
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact