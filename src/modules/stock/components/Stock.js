import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import Moment from 'react-moment'

import MaterialTable, { MTableToolbar } from 'material-table'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import { DeleteOutline, Edit } from '@material-ui/icons'

import * as tableIcon from './tableIcons'
import * as stockActions from 'modules/actions/stock.action'
import { imageUrl } from 'modules/Constants'

const tableIcons = tableIcon
const useStyles = makeStyles((theme) => ({
  root: {
    width: '700',
    marginTop: 0,
  },
}))

export default function Stock(props) {
  const dispatch = useDispatch()
  const stockReducer = useSelector(({ stockReducer }) => stockReducer)

  useEffect(() => {
    dispatch(stockActions.getProducts())
  }, [])

  const columns = [
    {
      title: 'Id',
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: 'Image',
      cellStyle: { padding: 0 },
      render: (item) => (
        <img
          src={`${imageUrl}/images/${item.image}?dummy=${Math.random()}`}
          style={{ width: 70, height: 70, borderRadius: '5%' }}
        />
      ),
    },
    {
      title: 'Name',
      cellStyle: { minWidth: 700 },
      render: (item) => <Typography variant="body1">{item.name}</Typography>,
    },

    {
      title: 'Price',
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'฿'}
          />
        </Typography>
      ),
    },
    {
      title: 'Stock',
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.stock}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
            suffix={' pcs'}
          />
        </Typography>
      ),
    },
    {
      title: 'Updated',
      render: (item) => (
        <Typography>
          <Moment format="DD/MM/YYYY">{item.updatedAt}</Moment>
        </Typography>
      ),
    },
  ]

  const actions = [
    {
      icon: () => <Edit />,
      iconProps: { color: 'primary' },
      tooltip: 'Edit',
      onClick: (event, rowData) => {
        props.history.push('/stock/edit/' + rowData.id)
      },
    },
    {
      icon: () => <DeleteOutline />,
      iconProps: { color: 'action' },
      tooltip: 'Delete',
      onClick: (event, rowData) => {},
    },
  ]
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MaterialTable
        icons={tableIcons.TableIcon}
        columns={columns}
        data={stockReducer.result ? stockReducer.result : []}
        title="Stock"
        actions={actions}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div style={{ padding: '0px 10px' }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/stock/create"
                >
                  Create
                </Button>
              </div>
            </div>
          ),
        }}
      />
    </div>
  )
}
