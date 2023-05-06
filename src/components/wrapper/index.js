import React from 'react'
import { View } from 'react-native';
import wrapperStyles from '../../styles/wrapperStyles';

const WrapperComponent = ({children}) => {
  return <View style={wrapperStyles.wrapper}>{children}</View>
}

export default WrapperComponent;