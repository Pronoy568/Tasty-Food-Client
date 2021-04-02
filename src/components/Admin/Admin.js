import React, { useContext, useState } from 'react';
import { UserContest } from '../../App';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContest);
    const { register, handleSubmit } = useForm();
    const [imageURL,setImageURL] = useState(null);

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b349a25b12d1cf8ea35b3bbbf5e43501');
        imageData.append('image', event.target.files[0]);
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const onSubmit = data => {
        console.log(data)
        const foodData ={
            name : data.name,
            price : data.price,
            imageURL : imageURL
        } 
        const url = `https://apricot-cupcake-24806.herokuapp.com/addFood`;
        console.log(foodData);
        fetch(url,{
            method: 'POST',
            headers:{ 
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodData)
        })
        .then(res => console.log('server site response',res));
    };
    return (
        <div>
            <div class="total">
                <div class="left">
                    <h2 style={{color: 'green'}}>Add Food</h2>
                    <h2>Food Store</h2>
                    <h2>Update Food Information</h2> 
                </div>
                <div class="right">
                    <div>
                        <h2>Admin, {loggedInUser.displayName} !!! .</h2>
                        <h3>Mail : {loggedInUser.email}</h3>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue="Name" ref={register} /> 
                        <br/>
                        <br/>
                        
                        <input name="price" defaultValue= "price" ref={register} /> 
                        <br/>
                        <br/>

                        <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                        <br/>
                        <br/>
                        <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
  