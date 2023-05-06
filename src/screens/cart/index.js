import React from 'react';
import { WrapperComponent } from '../../components';
import Top from './top';
import Details from './details';

const Cart = () => {
  return (
    <>
        <Top/>
        <WrapperComponent>
         <Details/>
        </WrapperComponent>
    </>
  )
}

export default Cart