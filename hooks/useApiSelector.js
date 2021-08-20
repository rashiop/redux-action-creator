import { useSelector } from 'react-redux';

/*
  Reusable api store selector
  INPUT:
    1. type
        string
        success, loading
    2. actions
        string[]
        array of actionType.default generated in constant
    3. logic
        string, to use array method
        every, some
  OUTPUT:
    1. ELSE boolean
*/
const useApiSelector = ({ type, actions = [], logic = 'some' }) => {
  const state = useSelector(({ api }) => api)
  const stateAction = Boolean(actions.length) && type
  if (!stateAction) {
    return false;
  }

  switch (type) {
    case 'success':
    case 'loading':
      return actions[logic]((action) => Boolean((state[type] || {})[action.default]))
    default:
      return false
  }
};

export default useApiSelector;
