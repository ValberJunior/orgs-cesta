import React from 'react';
import { Text } from 'react-native';
import textSyles from '../../styles/textSyles';

const TextComponent = ({style, bold,children}) => {
  return <Text style={[style, bold ? textSyles.bold : textSyles.regular]}>
    {children}
    </Text>
}

export default TextComponent