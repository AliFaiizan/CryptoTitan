import React, {useEffect, useRef, useState} from 'react';
import {Image} from 'react-native';
import {Box, Button, FlatList, Spinner, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import * as SignalActions from '../../store/action/signals.action';

import SignalComponent from '../../components/signal/SignalComponent';
import signalSheet from '../../components/signal/signalSheet';
import {registerSheet} from 'react-native-actions-sheet';
import {Color} from '../../constants/Colors';

// for registering sheet for using it anywhere from the mobile
registerSheet('signal', signalSheet);

const Signal = () => {
  let dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const signals = useSelector((state: any) => {
    return state.signal.signals;
  });

  const get = async () => {
    setIsLoading(true);
    try {
      await dispatch(SignalActions.getSignals());
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    //this will get the total signal from the server
    get();
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
                <Text fontSize={15} fontWeight={'bold'} color={'muted.300'}>
                  Try Again
                </Text>
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

const renderComponent = ({item}: any) => {
  return (
    <SignalComponent
      key={item.id}
      imageUrl="https://banner2.cleanpng.com/20171216/93d/euro-logo-png-5a355202a25bf2.837368021513443842665.jpg"
      date="18 Sep"
      price={32}
      title="Euro/USD"
      isHot
      entry="entry 1.10 - 1.120"
      stop="stop 1.00"
      targets={[1.23, 1.27, 1.29]}
    />
  );
};

export default Signal;
