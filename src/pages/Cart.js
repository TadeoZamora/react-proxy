import React,{ useContext } from 'react';
import List from '../components/List'
import Product from '../components/Product'
import { Store } from '../context/Process'

const Cart = () => {
    const { updateCart, cart } = useContext( Store )
    
    const deleteProduct = (index) =>{
        let backup = cart.filter( (item,position) =>{
            if(position !== index){
                return item
            }
        })
        updateCart(backup)
    }

    return (
        <div className="container">
            <List>
                {
                    cart.length > 0 && 
                    <>
                        List
                        {
                            cart.map((item,index) => (
                                <Product deleteProduct={ () => deleteProduct(index) } key={ index.toString()} name={item.name}/>
                            ))
                        }
                    </>
                }
            </List>
        </div>
    );
};

export default Cart;