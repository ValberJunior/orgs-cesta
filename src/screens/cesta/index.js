import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../../styles/global';

const Cesta = () => {
  return (
    <View style={[globalStyles.container]}>
        <StatusBar style="auto" />
        <Text>Cesta</Text>
    </View>
  )
}

export default Cesta