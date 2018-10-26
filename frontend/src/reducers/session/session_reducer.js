import {SET_CURRENT_USER } from '../../util/session_api_util';

const _nullUser = Object.freeze({
  currentUser: {
    id: null
  }
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_CURRENT_USER:
    // debugger;
      return { currentUser:
                { id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email }
              };
    default:
      return state;
  }
};

export default sessionReducer;
