import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../context/Process';

const NagivationBar = () => {
    const { cart } = useContext(Store)
    return (
        <Navbar>
            <Navbar.Brand href="#home">Products</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Cart: <Link to="/cart">{ cart.length }</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NagivationBar;