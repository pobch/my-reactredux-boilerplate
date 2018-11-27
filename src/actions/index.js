export const apiCall = () => {
  return async dispatch => {
    try {
      // call the api with await
      dispatch({
        type: 'apiCalled',
        payload: 'response data'
      })
    } catch (error) {
      dispatch({
        type: 'errorAction',
        payload: 'an error message or sth'
      })
    }
  }
}

export const normalAction = () => {
  return {
    type: 'foo',
    payload: 'bar'
  }
}
