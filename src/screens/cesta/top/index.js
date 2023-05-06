import React from 'react';
import TopImg from '../../../../assets/topo.png';
import styles from './styles';
import { Image } from 'react-native';
import { TextComponent } from '../../../components';

const Top = () => {
  return (
    <>
    <Image 
        source={TopImg}
        style={styles.top}
        />
        <TextComponent 
          bold
          style={styles.title}>
            Detalhe da Cesta
        </TextComponent>
    </>
  )
}

export default Top