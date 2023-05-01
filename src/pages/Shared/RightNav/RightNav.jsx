import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../qZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>{' '}
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>{' '}
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook> Facebook</FaFacebook></ListGroup.Item>
                    <ListGroup.Item><FaTwitter> Twitter</FaTwitter></ListGroup.Item>
                    <ListGroup.Item><FaInstagram> Instagram</FaInstagram></ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;