import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light text-center py-3">
            <Container>
                <p className="mb-0">&copy; {new Date().getFullYear()} Moneka Rehan </p>
            </Container>
        </footer>
    );
};

export default Footer;