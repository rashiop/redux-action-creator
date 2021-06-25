import { GET_CUSTOMER_DATA } from './constant'
import log from 'utils/log'

export const getCustomerData = () => (dispatch) => {
  try {
    dispatch({
      type: GET_CUSTOMER_DATA.loading
    })

    // do something
    dispatch({
      type: GET_CUSTOMER_DATA.success,
      data: ['Customer']
    })
  } catch(err) {
    log(err)
    dispatch({
      type: GET_CUSTOMER_DATA.error
    })
  }
}