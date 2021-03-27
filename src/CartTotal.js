import React from 'react'

import styled from 'styled-components'

function CartTotal() {
    return (
        <Container>
            <SubTotal>SubTotal</SubTotal>
            <ProceedToCheckoutButton>Proceed to Checkout</ProceedToCheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container=styled.div`

height:200px;
background-color:white;
flex:0.2;
margin-left:10px;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;

`

const SubTotal=styled.div`

`

const ProceedToCheckoutButton=styled.button`
margin-top:30px;
display:flex;
justify-content:center;
align-items:center;
width:150px;
height:40px;
background-color: #f0c14b;

border-radius:6px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: normal;
cursor:pointer;

`