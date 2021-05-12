import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useEffect } from "react"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: theme.palette.secondary.main,
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main
  },
  appBar: {
    marginBottom: 4
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar,
}))

const handleLogOut = event => {
  localStorage.removeItem('username', 'password', 'user')
}


const Navbar = (props) => {

  const classes = useStyles()
  const { window } = props
  const theme = useTheme()
  const container = window !== undefined ? () => window().document.body : undefined
  const [mobileOpen, setMobileOpen] = useState(false)
  const matches = useMediaQuery('(min-width:420px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }


  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {matches ?
            <Typography variant='h6' className={classes.title}>
              <Link to='/' className={classes.link}>
                <Button color='inherit'>Home</Button>
              </Link>
              <Link
                to={`/portfolio`}
                className={classes.link}
              >
                <Button color='inherit'>Portfolio</Button>
              </Link>
              <Link
                to={`/contact`}
                className={classes.link}
              >
                <Button color='inherit'>Contact</Button>
              </Link>
            </Typography>
            :
            <>
              <Typography variant='h6' className={classes.title}>
                <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.link} onClick={handleClick}>
                  Menu
              </Button>
              </Typography>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to='/' className={classes.link}>
                    <Button color='inherit'>Home</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/portfolio`}
                    className={classes.link}
                  >
                    <Button color='inherit'>Portfolio</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={`/contact`}
                    className={classes.link}
                  >
                    <Button color='inherit'>Contact</Button>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          }
          <Link to='/login' className={classes.link}>
            <Button onClick={handleLogOut} color='inherit'>Sign Out</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {/* THis is where the sidebar component is added */}
          <Sidebar handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>
    </div>
  )
}

export default Navbar