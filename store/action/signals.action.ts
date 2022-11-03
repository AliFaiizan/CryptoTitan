import AsyncStorage from "@react-native-async-storage/async-storage";

import {LOCALIP} from '../../config'


export const GET_SIGNALS = "GET_SIGNALS";


export const getSignals:Function = () => {
    return async (dispatch:Function) => {

      try{
        const response = await fetch(`http://${LOCALIP}:4000/signal`);
 
         if (!response.ok) {
            const { error } = await response.json();
            let message ;
            if (error.message === "NO_SIGNALS") {
              message = "There are no signals";
            }
            throw new Error(message);
         }
       
 
       const signalArray = await response.json();
 
       dispatch({type:GET_SIGNALS,signals:signalArray});

      }catch(err){

        //if there is error in feteching the signals than set the global value of signal to [] so it shows main encampment
        dispatch({type: GET_SIGNALS, signals: []});
        console.log('there is some error in fetching a signal',err)
      }
  };
}

//need work to be done

export const postSignals: Function = () => {
  return async (dispatch: Function) => {
    try {
      const response = await fetch(`http://${LOCALIP}:4000/signal`, {
        method: 'POST',
      });

      if (!response.ok) {
        const {error} = await response.json();
        let message;
        if (error.message === 'NO_SIGNALS') {
          message = 'There are no signals';
        }
        throw new Error(message);
      }

      const signalArray = await response.json();

      dispatch({type: GET_SIGNALS, signals: signalArray});
    } catch (err) {
      console.log('there is some error in fetching a signal', err);
    }
  };
};

