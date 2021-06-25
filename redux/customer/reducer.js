import { INITIAL_STATE, GET_CUSTOMER_DATA } from './constant'

const reducer = (state=INITIAL_STATE, { type, data }) => {
  switch(type) {
    case GET_CUSTOMER_DATA.success:
      return {
        customer: data
      }
    default: return state
  }
}

export default reducer