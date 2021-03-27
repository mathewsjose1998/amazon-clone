import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({cartItems}) {
    return (
        <Container>
            <CartItems cartItems={cartItems} />


            
            <CartTotal />


            
        </Container>
    )
}

export default Cart


const Container=styled.div`
display:flex;
background-color: #EAEDED;
padding: 14px 20px 0 20px

`
