import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const handleAddProduct = (productDetails) => {
        // const product = {};
        fetch('https://dorakata-shop.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);


    const onSubmit = data => {
        const productDetails = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageUrl: imageUrl
        }

        // console.log(data)
        // console.log(productDetails);
        handleAddProduct(productDetails);

    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2c3160fba839fdff9755670b28ae5350');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    };



    return (
        <div>

            {/* <form>
                <p><span>Name </span><input type="text" placeholder="Name" /></p>
                <p><span>Weight </span><input type="text" placeholder="Weight" /></p>
                <p><span>Price </span><input type="text" placeholder="Price" /></p>
                <p><span>Add Photo </span><input type="file" /></p>
                <button type="submit" >Add Product</button>
            </form> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' name="name" {...register("name")} />
                <hr />
                <input placeholder='weight' name="weight" {...register("weight")} />
                <hr />
                <input placeholder='price' name="price" {...register("price")} />
                <hr />
                <input name="" type="file" onChange={handleImageUpload} />
                <hr />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;