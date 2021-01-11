import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import MaterialTable, { MTableToolbar } from 'material-table'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import { imageUrl } from './../../Constants'
import Moment from 'react-moment'
import * as TableIcon from './TableIcons'
import * as stockActions from 'modules/actions/stock.action'

const tableIcons = TableIcon

export default function Stock() {
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

  return (
    <>
      <MaterialTable
        icons={tableIcons.TableIcon}
        columns={columns}
        data={stockReducer.result ? stockReducer.result : []}
        title="Stock"
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
    </>
  )
}
