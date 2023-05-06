import React from 'react';
import styles from './styles';
import { TextComponent } from '../../../components';
import { Image, View } from 'react-native';

const Details = ({name,logo,label,description,price}) => {

  return (
    <>
     <TextComponent bold style={styles.name}>{name}</TextComponent>
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <TextComponent style={styles.label}>{label}</TextComponent>
          </View>
          <TextComponent style={styles.description}>
            {description}
          </TextComponent>
          <TextComponent bold style={styles.price}>
            {
              Intl.NumberFormat('ptbr',{
                style: 'currency',
                currency: 'BRL',
              }).format(price)
            }
          </TextComponent>
    </>
  )
}

export default Details