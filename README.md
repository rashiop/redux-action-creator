Based on medium [article](https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6)

NOTE: 
not a working example (demo only)
the implementation in project depends on our mutual agreement
it might be better if we separate hooks/useApiSelector into useLoading & useSuccess

#### Stack:
1. React
2. Redux

#### Motivation:
1. Remove the needs to write action type for constant
2. Use a separate reducer to store all isFetching flags instead of polluting all of your reducers.

#### Set-up
1. utils > actionCreator
2. redux > api
3. hooks > useApiSelector

#### Usage
1. redux > customer > constant
```js
  import actionCreator from 'utils/actionCreator'

  export const GET_CUSTOMER_DATA = actionCreator(
    'customer/GET_CUSTOMER_DATA'
  )
```
2. redux > customer > action
```js
    ...
    try {
      dispatch({
        type: GET_CUSTOMER_DATA.loading
      })
      ...
      ...
      ...
      dispatch({
        type: GET_CUSTOMER_DATA.success,
        payload: {
          data: customer
        }
      })
    } catch(err) {
      dispatch({
        type: GET_CUSTOMER_DATA.error
      })
    }
```
3. redux > customer > reducer
```js
  const reducer = (state=INITIAL_STATE, { type, data }) => {
    switch(type) {
      case GET_CUSTOMER_DATA.success:
        ....
        return {
          customer: data
        }
      default: return state
    }
  }
```
4. customer.jsx
```jsx
  ...
  import useApiSelector from 'hooks/useApiSelector';
  import { GET_CUSTOMER_DATA } from 'redux/customer/constant';

  const Customer = () => {
    ...
    const isLoading = useApiSelector({
      type: 'loading',
      actions: [GET_CUSTOMER_DATA.default],
    });
    ...
  }
  
```
