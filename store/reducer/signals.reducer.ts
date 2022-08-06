import { GET_SIGNALS } from "../action/signals.action";

const initialState = {
  token: null,
  userId: null,
  didTryAL: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SIGNALS:
      return {
        //to be done
      };
  }
};
