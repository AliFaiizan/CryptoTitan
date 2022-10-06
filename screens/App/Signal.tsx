
import React, { useRef, useState } from 'react'

import {Box} from 'native-base'
import SignalComponent from '../../components/SignalComponent';


const Signal = () => {


  return (
    <Box flex={1} mt={3} alignItems={'center'}>
      <SignalComponent />
      <SignalComponent />
      <SignalComponent />
      <SignalComponent />
    </Box>
  );
}

export default Signal;