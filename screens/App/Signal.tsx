
import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-native';
import {Box, Button, FlatList, Spinner, Text, VStack} from 'native-base'
import { useDispatch, useSelector } from 'react-redux';
import * as SignalActions from '../../store/action/signals.action';


import SignalComponent from '../../components/signal/SignalComponent';
import signalSheet from '../../components/signal/signalSheet';
import {registerSheet} from 'react-native-actions-sheet';
import { Color } from '../../constants/Colors';


// for registering sheet for using it anywhere from the mobile
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
    <Box flex={1} pt={2} alignItems={'center'} justifyContent={'center'}>
      {isLoading ? (
        <Spinner color="emerald.500" size={'lg'} />
      ) : (
        <Box w={'97%'} flex={1}>
          {signals.length > 0 ? (
            <FlatList
              px={1}
              data={signals}
              renderItem={renderComponent}
              refreshing={isLoading}
              onRefresh={get}
            />
          ) : (
            <Box flex={1} justifyContent={'center'} alignItems={'center'}>
              <Image
                source={require('../../assets/images/nothing.png')}
                style={{width: 150, height: 200}}
              />

              <Text fontSize={20} fontWeight={'bold'} m={2} color={'muted.400'}>
                There Are No Signal Available
              </Text>
              <Button
                onPress={get}
                height={12}
                borderWidth={2}
                borderColor={Color.BorderColor}
                width="85%"
                backgroundColor={Color.BtnColor}>
                <Text
                  fontSize={15}
                  fontWeight={'bold'}
                  color={'muted.300'}>
                  Try Again
                </Text>
              </Button>
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

