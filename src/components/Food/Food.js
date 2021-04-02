import React from 'react';
import { useHistory } from 'react-router-dom';
import './Food.css';

const Food = ({food}) => {
    console.log(food);
    const history = useHistory();
    const handleBuy = (name,price) =>{
       history.push(`/checkOut/${name}/${price}`);
    }

    return (
        <div class="style">
           <div class="card-style">
                <img src={food.imageURL} alt=""/>
                <div>
                    <h2>{food.name}</h2>
                    <h3>${food.price} </h3>
                    <button  onClick={() => handleBuy(food.name,food.price)} type="button" class="btn btn-light button">Buy Now</button>
                </div>
           </div>
        </div>
    );
};

export default Food;