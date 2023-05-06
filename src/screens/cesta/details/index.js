import React from 'react';
import styles from './styles';
import { TextComponent } from '../../../components';
import { Image, View } from 'react-native';
import Logo from '../../../../assets/logo.png';

const Details = () => {
  return (
    <>
     <TextComponent bold style={styles.name}>Cesta de Verduras</TextComponent>
          <View style={styles.header}>
            <Image source={Logo} style={styles.logo} />
            <TextComponent style={styles.label}>Jenny Jack Farm</TextComponent>
          </View>
          <TextComponent style={styles.description}>
            Uma cesta com produtos selecionados 
            cuidadosamente da fazenda direto 
            para sua cozinha</TextComponent>
          <TextComponent bold style={styles.price}>
            {
              Intl.NumberFormat('ptbr',{
                style: 'currency',
                currency: 'BRL',
              }).format(40)
            }
          </TextComponent>
    </>
  )
}

export default Details