import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar bg="primary" variant="dark" className="justify-content-center">
            <Navbar.Brand>Notes App</Navbar.Brand>
        </Navbar>
    );
};

export default Header;