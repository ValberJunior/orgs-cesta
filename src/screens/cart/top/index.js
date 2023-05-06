import React from 'react';
import styles from './styles';
import { Image } from 'react-native';
import { TextComponent } from '../../../components';

const Top = ({background,title}) => {
  return (
    <>
    <Image 
        source={background}
        style={styles.top}
        />
        <TextComponent 
          bold
          style={styles.title}>
         {title}
        </TextComponent>
    </>
  )
}

export default Top