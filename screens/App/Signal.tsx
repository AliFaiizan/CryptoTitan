
import React, { useEffect, useRef, useState } from 'react'

import {Box, Spinner} from 'native-base'
import SignalComponent from '../../components/SignalComponent';
import { useDispatch, useSelector } from 'react-redux';
import * as SignalActions from '../../store/action/signals.action';



 
const Signal = () => {

  let dispatch = useDispatch()

  const signals=useSelector((state:any) => { 
    return state.signal.signals
   })
  

   const get=async() => { 

    try{
      await dispatch(SignalActions.getSignals());

    }catch(err){
      console.log(err)
    }
    }
   useEffect(() => {
    get()
  }, [signals]);


  return (
    <Box flex={1} mt={3} alignItems={'center'} justifyContent={'center'}>
      <Spinner color="emerald.500" />
      {
        signals.map((item:any,index:any) => {
          return (
            <SignalComponent
              key={index}
              imageUrl="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png"
              date="10 Sep"
              price={32}
              title="BNB"
              isHot
              entry="entry 20 - 22"
              stop="stop 18"
              targets={[22.045, 22.823, 24.541]}
            />
          );
        })
      }
    </Box>
  );
}

export default Signal;

