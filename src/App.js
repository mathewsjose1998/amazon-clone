import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import {db} from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [cartItems, SetCartItems]=useState([]);

  const getCartItems=()=>{
    db.collection('cartItems').onSnapshot((snapshot)=>{
      let tempitems=[];

      tempitems=snapshot.docs.map((doc)=>({
        id:doc.id,
        product:doc.data()
      }))
      SetCartItems(tempitems)
    })
  }

  useEffect(() => {
   getCartItems();
    
  }, [])


console.log(cartItems);


  return (
    <Router>
        <div className="App">

          <Header />
          <Switch>
                <Route path="/cart">
                  <Cart cartItems={cartItems}/>
                </Route>
              
                <Route path="/">
                    <Home />
                </Route>

          </Switch>
          
        
        </div>
  </Router>
  );
}

export default App;
