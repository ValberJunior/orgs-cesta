import React from 'react';
import styles from './styles';
import { TextComponent } from '../../../components';
import { TouchableOpacity, Image, View } from 'react-native';

const Details = ({name,logo,label,description,price, button}) => {

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
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => { }}>
        <TextComponent bold style={styles.labelButton}>
          {button}
        </TextComponent>
      </TouchableOpacity>
    </>
  )
}

export default Details