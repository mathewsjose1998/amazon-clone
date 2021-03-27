import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
function Product({title,price,rating,image,id}) {
    console.log(id)

    const addToCart=()=>{
        const cartItem=db.collection('cartItems').doc(id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){    //if item already exists in cart
                cartItem.update({
                    quantity:doc.data().quantity+1
                })
            }else{
                db.collection('cartItems').doc(id).set({   //new item to cart
                    name:title,
                    image:image,
                    price:price,
                    quantity:1
                })

            }
        })

    }
    return (
        <Container>
            <Title>
                {title}
           
            </Title>

            <Price>

                    ${price}
            </Price>

            <Rating>
                    
                    {
                        Array(rating)
                        .fill()
                        .map(rating=><p>⭐</p>)
                    }

            </Rating>
            <Image src={image} />



            <Action>

                <AddToCartButton 
                onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>

            </Action>
            

            
        </Container>
    )
}

export default Product


const Container=styled.div`
background-color:white;
max-height:350px;
flex: 1;
z-index:100;
padding:20px;
margin:20px;
display:flex;
flex-direction:column;
border-radius:5px;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
justify-content:space-evenly;
`
const Title=styled.span`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: large;
font-weight:700;
`

const Price=styled.span`
font-weight:500;
margin-top:3px
`
const Rating=styled.div`
display:flex;
`

const Image=styled.img`
max-height:200px;
object-fit:contain;



`
const AddToCartButton=styled.button`
width:100px;
height:40px;
background-color: #f0c14b;

border-radius:6px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: normal;
cursor:pointer;
`

const Action=styled.div`
display:flex;
justify-content:center;
`
