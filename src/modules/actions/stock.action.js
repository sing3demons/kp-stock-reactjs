import { server } from 'modules/Constants'
import { httpClient } from 'modules/utils/HttpClient'

// Stock Page
const STOCK_FETCHING = 'STOCK_FETCHING'
const STOCK_SUCCESS = 'STOCK_SUCCESS'
const STOCK_FAILED = 'STOCK_FAILED'
const STOCK_CLEAR = 'STOCK_CLEAR'

// Stock Edit Page
const STOCK_EDIT_FETCHING = 'STOCK_EDIT_FETCHING'
const STOCK_EDIT_SUCCESS = 'STOCK_EDIT_SUCCESS'
const STOCK_EDIT_FAILED = 'STOCK_EDIT_FAILED'
const STOCK_EDIT_INITIALED = 'STOCK_EDIT_INITIALED'

const setStateToSuccess = (payload) => ({
  type: STOCK_SUCCESS,
  payload,
})

const setStateToFetching = () => ({
  type: STOCK_FETCHING,
})

const setStateToFailed = () => ({
  type: STOCK_FAILED,
})

const getProducts = () => {
  return (dispatch) => {
    dispatch(setStateToFetching())
    doGetProducts(dispatch)
  }
}

export const addProduct = (formData, history) => {
  return async (dispatch) => {
    await httpClient.post(server.PRODUCT_URL, formData)
    history.goBack()
  }
}

const doGetProducts = async (dispatch) => {
  try {
    let result = await httpClient.get(server.PRODUCT_URL)
    dispatch(setStateToSuccess(result.data))
  } catch (err) {
    dispatch(setStateToFailed())
  }
}

export {
  STOCK_FETCHING,
  STOCK_SUCCESS,
  STOCK_FAILED,
  STOCK_CLEAR,
  STOCK_EDIT_FETCHING,
  STOCK_EDIT_SUCCESS,
  STOCK_EDIT_FAILED,
  STOCK_EDIT_INITIALED,
  setStateToSuccess,
  setStateToFetching,
  setStateToFailed,
  getProducts,
}
