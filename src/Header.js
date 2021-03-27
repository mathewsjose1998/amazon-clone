import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';

import {
    
    Link
  } from "react-router-dom";
  

function Header(){
    return (
        <div>
            <Container>
                    <HeaderLogo>
                        <Link to="/">
                            <img src={"https://pngimg.com/uploads/amazon/amazon_PNG25.png"}/>
                        </Link>
                    </HeaderLogo>

                    <HeaderOptionAddress>
                        <LocationIcon>
                            <RoomIcon />
                        </LocationIcon>
                        <HeaderOption>
                                 <OptionLineOne>Hello</OptionLineOne>        
                                 <OptionLineTwo>Select Your Addresss</OptionLineTwo> 
                        </HeaderOption>       

                    </HeaderOptionAddress>

                        <HeaderSearch>
                            <HeaderSearchInput type="text"/>
                            <HeaderSearchIconContainer>
                                <SearchIcon />

                            </HeaderSearchIconContainer>
                        
                        </HeaderSearch>

                    <HeaderNavItems>
                            <HeaderOption>
                                     <OptionLineOne>Hello, Mathews</OptionLineOne>        
                                    <OptionLineTwo>Accounts & List</OptionLineTwo>     
                            </HeaderOption>

                            <HeaderOption>
                                     <OptionLineOne>Return</OptionLineOne>        
                                    <OptionLineTwo>& Orders</OptionLineTwo>     
                            </HeaderOption>
                                
                           
                                    
                                <HeaderOptionCart>
                                    <Link to="/cart">
                                              <ShoppingCartIcon />
                                            <CartCount>4</CartCount>
                                    </Link>
                                </HeaderOptionCart>
                                
                            
                    </HeaderNavItems>
            </Container>
          
        </div>
    )
}

export default Header

const Container=styled.div`

height: 60px;
background-color: #0F1111;
display:flex;
align-items:center;
color:white;
justify-content: space-between;

`


const HeaderLogo = styled.div`
img{
    width:100px;
    padding:11px
}


`
const HeaderOptionAddress=styled.div`
display:flex;
align-items: center;
`
const LocationIcon=styled.div`
`



const OptionLineOne=styled.div`
`


const OptionLineTwo=styled.div`
font-weight: 700;

`

const HeaderSearch=styled.div`
display:flex;
flex-grow:1;
height:40px;
border-radius: 6px;
overflow:hidden;

margin-left:5px;
background-color:white;

:focus-within{
    box-shadow: 0 0 0 3px #F90;
}
`

const HeaderSearchInput=styled.input`

flex-grow:1;
border:0;

:focus{
    outline:none;
}


`

const HeaderSearchIconContainer=styled.div`
background-color:#febd69;
width:45px;
display: flex;
align-items: center;
justify-content: center;
color:black;

`

const HeaderNavItems =styled.div`

display:flex;


`

const HeaderOption=styled.div`
padding: 10px 10px 10px 10px;


`
const HeaderOptionCart=styled.div`
display:flex;
align-items:center;
padding-right:9px;

a{
    display:flex;
    text-decoration: none;
    color:white;
}
`
const CartCount=styled.div`
padding-left:3px;
font-weight:700;
color:#f08804;
`




