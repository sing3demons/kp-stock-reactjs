import { httpClient } from 'modules/utils/HttpClient'
import { server } from '../Constants'

export const LOGIN_FETCHING = 'LOGIN_FETCHING'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const LOGIN_STATUS = 'LOGIN_STATUS'

const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
})

const setStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
})

const setStateToFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
})

const setStateToLogout = () => ({
  type: LOGOUT,
})

const login = ({ username, password, history }) => {
  return async (dispatch) => {
    dispatch(setStateToFetching())

    const { data } = await httpClient.post(server.LOGIN_URL, {
      username,
      password,
    })
    if (data.result === 'ok') {
      localStorage.setItem(LOGIN_STATUS, 'ok')
      dispatch(setStateToSuccess('ok'))
      history.push('/stock')
    } else {
      dispatch(setStateToFailed('failed'))
    }
  }
}

const isLoggedIn = () => {
  const loginStatus = localStorage.getItem(LOGIN_STATUS)
  return loginStatus === 'ok'
}

const checkLogin = () => {
  return (dispatch) => {
    const loginStatus = localStorage.getItem(LOGIN_STATUS)
    if (loginStatus === 'ok') {
      dispatch(setStateToSuccess({}))
    }
  }
}

const logout = ({ history }) => {
  return (dispatch) => {
    localStorage.removeItem(LOGIN_STATUS)
    dispatch(setStateToLogout())
    history.push('/')
  }
}

export {
  setStateToFetching,
  setStateToSuccess,
  setStateToFailed,
  setStateToLogout,
  login,
  checkLogin,
  isLoggedIn,
  logout,
}
