import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <div className="row m-4">
                    <div className="col d-flex align-items-center justify-content-center">
                        <Navbar>
                            <NavbarBrand href="#home">
                                <NavLink className="" to="/">
                                <img src="/logo.svg" width="50" height="50" alt="" className="d-inline-block align-top"/>
                                </NavLink>
                            </NavbarBrand>
                            <NavLink className="" to="/gallery">Галерија</NavLink>
                            <NavLink className="" to="/about">За Нас</NavLink>
                            <NavLink className="" to="/contact">Контакт</NavLink>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;