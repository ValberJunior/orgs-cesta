import React from 'react';
import { WrapperComponent } from '../../components';
import Top from './top';
import Details from './details';

const Cart = ({top, details}) => {
  return (
    <>
        <Top {...top}/>
        <WrapperComponent>
         <Details {...details}/>
        </WrapperComponent>
    </>
  )
}

export default Cart