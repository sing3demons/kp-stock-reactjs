import {
  LOGIN_FETCHING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  server,
} from '../Constants'
import { httpClient } from 'modules/utils/HttpClient'

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
})

export const setStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const setStateToFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
})

export const setStateToLogout = () => ({
  type: LOGOUT,
})

export const login = ({ username, password, history }) => {
  return async (dispatch) => {
    dispatch(setStateToFetching())
    const { data } = await httpClient.post(server.LOGIN_URL, {
      username,
      password,
    })
    if (data.result == 'ok') {
      // localStorage.setItem(LOGIN_STATUS, "ok")
      dispatch(setStateToSuccess('ok'))
      history.push('/stock')
    } else {
      dispatch(setStateToFailed('failed'))
    }
  }
}

export const logout = ({ history }) => {
  return (dispatch) => {
    dispatch(setStateToLogout())
    history.push('/')
  }
}
