import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    // const handleAddProduct = () => {
    //     const product = {};
    //     fetch('http://localhost:5000/addProduct', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    // }



    return (
        <div>

            <form>
                <p><span>Name </span><input type="text" placeholder="Name" /></p>
                <p><span>Weight </span><input type="text" placeholder="Weight" /></p>
                <p><span>Price </span><input type="text" placeholder="Price" /></p>
                <p><span>Add Photo </span><input type="file" /></p>
                <button type="submit" >Add Product</button>
            </form>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />
                <br />
                <input {...register("exampleRequired", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit" />
            </form> */}
        </div>
    );
};

export default AddProduct;