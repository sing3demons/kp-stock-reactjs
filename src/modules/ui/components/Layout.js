import React, { useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Content from './Content'
import Header from './Header'
import Menu from './Menu'
import * as loginActions from 'modules/actions/login.action'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(10),
  },
}))

export default function Layout() {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const loginAction = loginActions.checkLogin()
    dispatch(loginAction)
  }, [])

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  return (
    <>
      <CssBaseline></CssBaseline>
      <Header handleDrawerOpen={handleDrawerOpen} open={openDrawer}></Header>
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose}></Menu>
      <div className={classes.content}>
        <Content></Content>
      </div>
    </>
  )
}
