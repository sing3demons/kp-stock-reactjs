export const LOGIN_FETCHING = 'LOGIN_FETCHING'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

const initialState = {
  result: null,
  isFetching: false,
  error: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, error: false, result: null }
    case LOGIN_FAILED:
      return { ...state, isFetching: false, error: true, result: payload }
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, error: false, result: payload }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
