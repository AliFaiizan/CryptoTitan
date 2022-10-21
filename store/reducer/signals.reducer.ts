import { GET_SIGNALS } from "../action/signals.action";

const initialState = {
 signals:[]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SIGNALS:
      return {
        signals:action.signals
      };

    default:
    return state
  }
};
