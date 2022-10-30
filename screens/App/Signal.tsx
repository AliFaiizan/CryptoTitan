
import React, { useEffect, useRef, useState } from 'react'

import {Box, Button, FlatList, Spinner, Text} from 'native-base'
import SignalComponent from '../../components/SignalComponent';
import { useDispatch, useSelector } from 'react-redux';
import * as SignalActions from '../../store/action/signals.action';


import signalSheet from '../../components/signalSheet';
import {registerSheet} from 'react-native-actions-sheet';



registerSheet('signal', signalSheet);

 
const Signal = () => {


  let dispatch = useDispatch()

  const [isLoading,setIsLoading]=useState(true)

  const signals=useSelector((state:any) => { 
    return state.signal.signals
   })
  

   const get=async() => { 
    setIsLoading(true);
    try{
      await dispatch(SignalActions.getSignals());
    }catch(err){
      console.log(err)
    }

    setIsLoading(false);
    
    }

   useEffect(() => {
    //this will get the total signal from the server 
      get()
  }, [dispatch]);



  return (   
      <Box flex={1} mt={3} alignItems={'center'} justifyContent={'center'}>
        {isLoading ? (
          <Spinner color="emerald.500" size={'lg'} />
        ) : (
          <Box w={'95%'} m={2} flex={1}>
            {signals.length > 0 ? (
              <FlatList
                px={1}
                data={signals}
                renderItem={renderComponent}
                refreshing={isLoading}
                onRefresh={get}
              />
            ) : (
              <Box>
                <Text fontSize={20} fontWeight={'bold'}>
                  There are no signal Available
                  <Button onPress={get}>Refresh</Button>
                </Text>
              </Box>
            )}
          </Box>
        )}
      </Box>
  );
}

const renderComponent=({item}:any) => {
  return <SignalComponent
              key={item.id}
              imageUrl="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png"
              date="10 Sep"
              price={32}
              title="BNB"
              isHot
              entry="entry 20 - 22"
              stop="stop 18"
              targets={[22.045, 22.823, 24.541]}
            />
}

export default Signal;

