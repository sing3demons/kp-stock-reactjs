import React from 'react'
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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
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
              name="password"
              label="Password"
              type="password"
              id="password"
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
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}
