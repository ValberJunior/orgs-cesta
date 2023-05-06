import React from 'react';
import { Image, Text } from 'react-native';
import Topo from '../../../assets/topo.png';
import styles from './styles';

const Cesta = () => {
  return (
    <>
      <Image 
        source={Topo}
        style={styles.topo}
        />
        <Text 
          style={styles.title}>
            Detalhe da Cesta
        </Text>
    </>
  )
}

export default Cesta