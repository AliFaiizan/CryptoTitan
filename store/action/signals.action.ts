import AsyncStorage from "@react-native-async-storage/async-storage";

export const GET_SIGNALS = "GET_SIGNALS";


export const getSignals = (signals: any) => {
     return async (dispatch: any) => {
       const response = await fetch(`server address`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({returnSecureToken: true }),
       });

       if (!response.ok) {
         if (!response.ok) {
           const { error } = await response.json();
           let message ;
           if (error.message === "NO_SIGNALS") {
             message = "There are no signals";
           }
           throw new Error(message);
         }
       }

       const resData = await response.json();

     };
}

