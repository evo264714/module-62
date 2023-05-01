import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout =() =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='mx-2 text-decoration-none text-secondary' to='/category/0'>Home</Link>
                            <Link className='mx-2 text-decoration-none text-secondary' to='/'>About</Link>
                            <Link className='mx-2 text-decoration-none text-secondary' to='/'>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                            {user ?
                                <Button onClick={handleLogout} variant="secondary">Logout</Button> :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;