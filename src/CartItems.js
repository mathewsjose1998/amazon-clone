import styled from 'styled-components'

import React from 'react'
import CartItem from './CartItem'


function CartItems({cartItems}) {
    console.log(cartItems);
    return (
      <Container>
          <Title>
              Shopping Cart
              <hr />
          </Title>
          
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                       
                        <CartItem 
                        id={item.id}
                        items={item.product}

                        />
                        
                    ))

                    
                }
             
             </ItemsContainer> 
      </Container>
    )
}

export default CartItems

const Container=styled.div`

background-color:white;
flex:0.8;
margin-right:10px;
font-family: "Amazon Ember",Arial,sans-serif;
color: #0F1111;
font-size: 18px;
padding:20px;
padding-top:20px;
`
const Title=styled.h1`
margin-bottom:8px;


`
const ItemsContainer=styled.div`
`



