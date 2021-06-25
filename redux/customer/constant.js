import actionCreator from 'utils/actionCreator'

export const INITIAL_STATE = {
  customers: [],
  customer: {},
}
export const GET_CUSTOMER_DATA = actionCreator(
  'customer/GET_CUSTOMER_DATA'
)