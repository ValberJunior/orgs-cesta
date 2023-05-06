import React from 'react';
import { Image, Text, View } from 'react-native';
import Topo from '../../../assets/topo.png';
import Logo from '../../../assets/logo.png';
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
        <View style={styles.wrapper}>
          <Text style={styles.name}>Cesta de Verduras</Text>
          <View style={styles.header}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.label}>Jenny Jack Farm</Text>
          </View>
          <Text style={styles.description}>
            Uma cesta com produtos selecionados 
            cuidadosamente da fazenda direto 
            para sua cozinha</Text>
          <Text style={styles.price}>
            {
              Intl.NumberFormat('ptbr',{
                style: 'currency',
                currency: 'BRL',
              }).format(40)
            }
          </Text>
        </View>
    </>
  )
}

export default Cesta