import React from 'react'
import styled from 'styled-components'

function Product2() {
    return (
        <Container>
            <SubContainer>
                    <Title>

                    Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Just Black
                    </Title>

                    <Price>

                    $349.00
                    </Price>

                    <Rating>
                            ⭐⭐⭐⭐⭐
                    

                    </Rating>
            </SubContainer>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._AC_SL1500_.jpg" />



            <Action>

                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>

            </Action>
            

            
        </Container>
    )
}

export default Product2


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
line-height:20px;
`

const Price=styled.span`
margin:4px;
font-weight:500;
margin-top:3px
`
const Rating=styled.div`
`

const SubContainer=styled.div`


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
