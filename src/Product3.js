import React from 'react'
import styled from 'styled-components'

function Product3() {
    return (
        <Container>
            <SubContainer>
                    <Title>

                    
Dell XPS 2in1 9310, 13.4 inch FHD+ Touch Laptop, Intel Core i7-1165G7
                    </Title>

                    <Price>

                    $1,700.03
                    </Price>

                    <Rating>
                            ⭐⭐⭐⭐
                    

                    </Rating>
            </SubContainer>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/71ADNGyk4rL._AC_SL1500_.jpg" />



            <Action>

                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>

            </Action>
            

            
        </Container>
    )
}

export default Product3


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
margin:4px;
font-weight:500;
margin-top:3px
`
const Rating=styled.div`
`

const SubContainer=styled.div`
display:flex;
flex-direction:column;

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
`

const Action=styled.div`
display:flex;
justify-content:center;
`
