import useApiSelector from 'hooks/useApiSelector';
import { GET_CUSTOMER_DATA } from 'redux/customer/constant';

const Customer = () => {
  const isLoading = useApiSelector({
    type: 'loading',
    actions: [GET_CUSTOMER_DATA.default],
  });
  
  if(isLoading) {
    return <Loading />
  }

  return (
    <p>Customer</p>
  )
}

export default Customer