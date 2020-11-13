import React, { createContext, useState } from 'react';

export const Store = createContext({
    cart : [],
    addToCart : () =>{},
    updateCart : () =>{}
})

const Process = ({...props}) => {
    const [ cart, setCart ] = useState([])

    const addToCart = (product) =>{
        //verificamos el producto que esta entrando 
        let exists = cart.findIndex(item => item.name === product.name)
        //si el valor es -1 significa que no existe y lo podemos agregar
        if(exists === -1){
            setCart( cart.concat(product) )
        }

    }

    const updateCart = (array) =>{
        setCart(array)
    }
    return (
        <Store.Provider 
            value={{
                cart : cart,
                addToCart : addToCart,
                updateCart : updateCart
            }}
        >
            {
                props.children
            }
        </Store.Provider>
    );
};

export default Process;