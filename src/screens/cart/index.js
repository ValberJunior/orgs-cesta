import React from 'react';
import { TextComponent, WrapperComponent } from '../../components';
import Top from './top';
import Details from './details';
import { FlatList } from 'react-native';
import ItemCard from './itemCard';
import styles from './styles';

const Cart = ({top, details, items}) => {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={({item})=> <ItemCard {...item}/>}
        keyExtractor={({name})=> name}
        ListHeaderComponent={
          ()=> {
            return <>
                    <Top {...top}/>
                    <WrapperComponent>
                    <Details {...details} />
                    <TextComponent bold style={styles.title}>{items.title}</TextComponent>
                    </WrapperComponent>
                  </>
          }
        }
      />
    </>
  )
}

export default Cart