
import React, { useRef, useState } from 'react'

import {Box} from 'native-base'
import SignalComponent from '../../components/SignalComponent';


const Signal = () => {


  return (
    <Box flex={1} mt={3} alignItems={'center'}>
      <SignalComponent
        imageUrl="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png"
        date="10 Sep"
        price={32}
        title="BNB"
        isHot
        entry="entry 20 - 22"
        stop="stop 18"
        targets={[
         22.045,22.823,24.541
        ]}
      />
    </Box>
  );
}

export default Signal;