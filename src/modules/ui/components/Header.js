import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import * as loginActions from 'modules/actions/login.action'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const loginReducer = useSelector(({ loginReducer }) => loginReducer)

  const goToHome = () => history.push('/')

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          {loginReducer.result && !loginReducer.error && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={props.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title} onClick={goToHome}>
            News
          </Typography>
          {loginActions.isLoggedIn() ? (
            <Button
              color="inherit"
              onClick={() => {
                dispatch(loginActions.logout({ history }))
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                history.push('/users')
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Header)
