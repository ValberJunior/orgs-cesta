import React from 'react';
import { Image, Text, View } from 'react-native';
import Topo from '../../../assets/topo.png';
import Logo from '../../../assets/logo.png';
import { TextComponent } from '../../components';
import styles from './styles';

const Cesta = () => {
  return (
    <>
      <Image 
        source={Topo}
        style={styles.topo}
        />
        <TextComponent 
          bold
          style={styles.title}>
            Detalhe da Cesta
        </TextComponent>
        <View style={styles.wrapper}>
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
        </View>
    </>
  )
}

export default Cesta