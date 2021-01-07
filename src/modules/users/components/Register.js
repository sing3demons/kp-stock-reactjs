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
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import logo_auth from 'assets/images/authen_header.jpg'
import Axios from 'axios'

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

export default function Register() {
  const classes = useStyles()
  const history = useHistory()
  const goToLogin = () => history.goBack()

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
            Register
          </Typography>
          <Formik
            initialValues={{ username: 'admin', password: '1234' }}
            onSubmit={(values, { setSubmitting }) => {
              Axios.post(
                'http://localhost:8085/api/v2/authen/register',
                values
              ).then((result) => {
                console.log(result.data)
              })
              // alert(JSON.stringify(values))
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={values.username}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
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
                  Register
                </Button>
                <Button
                  fullWidth
                  size="small"
                  color="primary"
                  onClick={goToLogin}
                >
                  login
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}
