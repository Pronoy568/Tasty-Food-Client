import React, { useContext } from 'react';
import { UserContest } from '../../App';
import './Orders.css';

const Orders = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContest);
    return (
        <div class="Orders">
            <h1>Hello, <span class="user">{loggedInUser.displayName}</span>!!! Thanks for your Order.</h1>
            <br/>
            <h3>Mail : <span class="userEmail">{loggedInUser.email}</span></h3>
            <br/>
            <h5>We will be contacting you soon by email address</h5>
            <h2>Thanks</h2>
        </div>
    );
};

export default Orders;