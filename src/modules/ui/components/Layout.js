import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Content from './Content'
import Header from './Header'
import Menu from './Menu'
import * as loginActions from 'modules/actions/login.action'
import { useDispatch, useSelector } from 'react-redux'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(9),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -480,
  },
}))

export default function Layout(props) {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const dispatch = useDispatch()
  const loginReducer = useSelector(({ loginReducer }) => loginReducer)

  useEffect(() => {
    const loginAction = loginActions.checkLogin()
    dispatch(loginAction)
  }, [])

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className={classes.root}>
      <CssBaseline></CssBaseline>
      <Header handleDrawerOpen={handleDrawerOpen} open={openDrawer}></Header>
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose}></Menu>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]:
            openDrawer && loginReducer.result && !loginReducer.error,
        })}
      >
        <div style={{ justifyContent: 'center' }}>
          <Content />
        </div>
      </main>
    </div>
  )
}
