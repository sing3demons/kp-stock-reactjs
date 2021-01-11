import React from 'react'
import {
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { TextField } from 'formik-material-ui'
import showImg from 'assets/images/ic_photo.png'

import * as stockActions from 'modules/actions/stock.action'

const useStyles = makeStyles((theme) => ({
  root: {},
  field: {
    marginTop: 16,
  },
  card: {},
}))

export default function StockCreate(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const showPreviewImage = (values) => {
    if (values.file_obj) {
      return (
        <img src={values.file_obj} style={{ height: 100, marginTop: 16 }} />
      )
    }
  }

  return (
    <Container>
      {/* Main content */}

      <Formik
        validate={(values) => {
          let errors = {}
          if (!values.name) errors.name = 'Enter name'
          if (!values.stock) errors.stock = 'Enter stock'
          if (!values.price) errors.price = 'Enter price'
          return errors
        }}
        initialValues={{ name: '', stock: 0, price: 0 }}
        onSubmit={(values, { setSubmitting }) => {
          let formData = new FormData()
          formData.append('name', values.name)
          formData.append('price', values.price)
          formData.append('stock', values.stock)
          formData.append('image', values.file)
          dispatch(stockActions.addProduct(formData, props.history))
          setSubmitting(false)
        }}
      >
        {({ values, setFieldValue, isValid, dirty }) => (
          <Form>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h3">
                  Create Stock
                </Typography>

                <Field
                  className={classes.field}
                  fullWidth
                  component={TextField}
                  name="name"
                  type="text"
                  label="Name"
                />
                <br />
                <Field
                  className={classes.field}
                  fullWidth
                  component={TextField}
                  name="price"
                  type="number"
                  label="Price"
                />

                <Field
                  className={classes.field}
                  fullWidth
                  component={TextField}
                  name="stock"
                  type="number"
                  label="Stock"
                />

                <div>{showPreviewImage(values)}</div>

                <div className={classes.field}>
                  <img src={showImg} style={{ width: 25, height: 20 }} />
                  <span
                    style={{
                      color: '#00B0CD',
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    Add Picture
                  </span>
                  <input
                    type="file"
                    onChange={(e) => {
                      e.preventDefault()
                      setFieldValue('file', e.target.files[0]) // for upload
                      setFieldValue(
                        'file_obj',
                        URL.createObjectURL(e.target.files[0])
                      ) // for preview image
                    }}
                    name="image"
                    click-type="type1"
                    className="picupload"
                    multiple
                    accept="image/*"
                    id="files"
                    style={{ padding: '20px 0' }}
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!(isValid && dirty)}
                >
                  Create
                </Button>
                <Button component={Link} to="/stock" color="default" raised>
                  Cancl
                </Button>
              </CardActions>
            </Card>
          </Form>
        )}
      </Formik>

      {/* /.content */}
    </Container>
  )
}
