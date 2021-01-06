export const LOGIN_FETCHING = 'LOGIN_FETCHING'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

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
  return (dispatch) => {
    dispatch(setStateToFetching())
    setTimeout(() => {
      dispatch(setStateToSuccess('ok'))
    }, 1000)
    history.push('/stock')
  }
}

export const logout = ({ history }) => {
  return (dispatch) => {
    dispatch(setStateToLogout())
    history.push('/')
  }
}
