export const successReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILED actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'SUCCESS',
  };
};
