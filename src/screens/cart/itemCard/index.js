import React from 'react';
import { TextComponent } from '../../../components';
import { Image } from 'react-native';
import styles from './styles';
import { View } from 'react-native';

const ItemCard = ({name, image}) => {
  return <View style={styles.item}>
          <Image source={image} style={styles.icon} />
          <TextComponent style={styles.name}>{name}</TextComponent>
      </View>
}

export default ItemCard