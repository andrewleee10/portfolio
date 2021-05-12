import "./Footer.css";
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: 'none',
    color: 'black',
    backgroundColor: '#f8dbaf',
    marginTop: 6
  },
}))

const githubUrl = 'https://github.com/andrewleee10'
const linkedinUrl = 'https://www.linkedin.com/in/andrew-lee-94910a161/'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className="footer">
      <Typography variant='body1' className={classes.title}>
        <a href={githubUrl}> Github </a> | <a href={linkedinUrl}> LinkedIn </a>
      </Typography>
    </footer>
  )
}

export default Footer