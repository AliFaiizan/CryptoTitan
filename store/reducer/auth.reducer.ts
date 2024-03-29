import { AUTHENTICATE, SET_DID_TRY_AL } from "../action/auth.action";

const initialState = {
  token: null,
  userId: null,
  didTryAL: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        didTryAL: true,
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAL: true,
      };
    // case SIGN_UP:
    //     return{
    //         token:action.token,
    //         userId:action.userId
    //     }

    default:
      return state;
  }
};
