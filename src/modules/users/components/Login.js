import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo_auth from 'assets/images/authen_header.jpg'
import { useHistory } from 'react-router-dom'
import * as loginAcction from 'modules/actions/login.action'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
}))

export default function Login() {
  const classes = useStyles()
  const history = useHistory()

  const [account, setAccount] = useState({
    username: 'admin',
    password: '1234',
  })

  const dispatch = useDispatch()

  const goToRegister = () => history.push('/users/register')

  return (
    <Container className={classes.content}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={logo_auth}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Login
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(loginAcction.login({ ...account, history }))
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={account.username}
              onChange={(e) => {
                setAccount({ ...account, username: e.target.value })
              }}
              name="username"
              id="username"
              label="Username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={account.password}
              onChange={(e) => {
                setAccount({ ...account, password: e.target.value })
              }}
              name="password"
              label="password"
              id="password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              size="small"
              color="primary"
              onClick={goToRegister}
            >
              Register
            </Button>
            #Debug {JSON.stringify(account)}
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}
