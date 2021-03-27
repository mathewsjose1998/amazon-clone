import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Product from "./Product"
import {db} from './firebase'
//import ProductRowTwo from "./ProductRowTwo"


function Home() {
    const[products, setProducts] =useState([])

    const getProducts=()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts=[]
            tempProducts=snapshot.docs.map((doc)=> (
                {
                    id: doc.id,
                    product: doc.data()
                }
                ));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {    // only calls once whwn the program is loaded first
       console.log('call products')
        getProducts()
    }, [])
   
    console.log(products)

    return (
        <Container>
            <Banner>


            </Banner>
            <Content>{
                
                products.map((data)=>(
                    <Product
                        title={data.product.name}
                        price={data.product.price}
                        rating={data.product.rating}
                        image={data.product.image}
                        id={data.id}
                    
                    
                    />
                ))
                
                
                }

               
                
               
                

            </Content>
        </Container>
    )
}

export default Home

const Container=styled.div`
max-width: 1200px;
margin: 0 auto;

`

const Banner=styled.div`  
background-image:url(https://i.imgur.com/SYHeuYM.jpg);
min-height: 600px;
background-size: cover;
background-position: center;

mask-image:linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));

`

const Content=styled.div`

padding-left:20px;
padding-right:2 0px;
margin-top:-320px;

display:flex;
`