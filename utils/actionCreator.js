export default (actionName) => ({
  loading: `${actionName}_REQUEST`,
  success: `${actionName}_SUCCESS`,
  error: `${actionName}_FAILED`,
  default: actionName,
})
