import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum reprehenderit assumenda adipisci molestiae voluptatibus exercitationem nam quo repellendus repellat modi aut inventore odit, animi porro sunt ex at officia.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;