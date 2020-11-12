import React from 'react';
import { useHistory } from "react-router-dom";
const PageOne = () => {
    //este hook te va a permitir acceder a las rutas de tu app
    const history = useHistory()

    const next = () => {
        //con push podras cambiar de pagina
        history.push('/page_two')
    }

    return (
        <div className="container text-center mt-5">
            <button className="btn btn-warning btn-sm" onClick={ () => next() }>Next</button>
        </div>
    );
};

export default PageOne;