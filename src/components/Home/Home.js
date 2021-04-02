import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Home.css';

const Home = () => {
    
    const [foods, setFoods] = useState([]);

    useEffect(() =>{
        fetch('https://apricot-cupcake-24806.herokuapp.com/foods')
        .then(res => res.json())
        .then(data =>setFoods(data))
    },[])

    return (
        <div class="style">
            {
                foods.map(food => <Food food={food}></Food>)
            }
        </div>
    );
};

export default Home;