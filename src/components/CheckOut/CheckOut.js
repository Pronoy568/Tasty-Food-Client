import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContest } from '../../App';
import './CheckOut.css';

const CheckOut = () => {
    const {name,price} = useParams();
    const [loggedInUser , setLoggedInUser] = useContext(UserContest);
    const history = useHistory();
    const handleOrder = () =>{
       history.push(`/Orders`);
    }

    return (
        <div class="CheckOut">
            <h1>Hello,<span class="UserName"> {loggedInUser.displayName} </span>!!! your Favorite Food order Now</h1>
            <h3>Food name  : <span class="foodName">{name}</span></h3>
            <h3>Quantity   : 1 </h3>
            <h3>Price      : {price}</h3>
            <button  onClick={() => handleOrder()} type="button" class="btn btn-secondary">Order</button>
        </div>
    );
};

export default CheckOut;