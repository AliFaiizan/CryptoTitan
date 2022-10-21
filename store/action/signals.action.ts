import AsyncStorage from "@react-native-async-storage/async-storage";

export const GET_SIGNALS = "GET_SIGNALS";


export const getSignals:Function = () => {
    return async (dispatch:Function) => {
      console.log('Hello')

      try{
        const response = await fetch(`http://localhost:4000/signal`);
 
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
        console.log('there is some error in fetching a signal',err)
      }
  };
}

