import styled from 'styled-components'
import React from 'react'

function CartItem({id,items}) {
   console.log(items);
   let options=[]
   for(let i=1;i<Math.max(items.quantity+1,20);i++){
       options.push(<option value={i}>Qty: {i}</option>)
   }
    return (
        
       <Container>
             <ImageContainer>
                     <Image src={items.image} />
             </ImageContainer>        
           
            <CartItemInfo>
                <CartItemInfoTop>
                    <h3>{items.name}</h3>
                </CartItemInfoTop>
                <CartItemBottom>
                    <CartItemQuantity>
                        <select
                        value={items.quantity}
                        >
                           {options}
                        </select>
                        
                        
                    </CartItemQuantity>
                    <CartItemDeleteContainer> Delete </CartItemDeleteContainer>
                </CartItemBottom>
            </CartItemInfo>
            <CartItemPrice>Price: ${items.price}</CartItemPrice>

       </Container>
    )
}

export default CartItem

const Container=styled.div`
display:flex;
padding-top:20px;
padding-bottom:12px;
border-bottom:1px solid #DDD;
`
const ImageContainer=styled.div`
width:200px;
flex-shirnk:0;
flex-grow:0;
`

const Image=styled.img`
max-height:200px;
object-fit:contain;
`

const CartItemInfo=styled.div`
overflow:hidden;
flex:0.9;
display:flex;
flex-direction:column;
flex-grow:1;

`

const CartItemInfoTop=styled.div`
h3{
    color: #007185;
}
`

const CartItemBottom=styled.div`
display:flex;
padding-top:15px;
align-items:center;

`
const CartItemQuantity=styled.span`
padding-right:20px;

select{
    border-radius:7px;
    background-color:#F0F2F2;
    padding:8px;

}
`
const CartItemDeleteContainer=styled.div`
color:#007185
margin-left:16px;
cursor: pointer;
`

const CartItemPrice=styled.span`
color:blue;
font-size:22px;
`