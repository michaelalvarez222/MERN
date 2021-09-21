import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router';

const OneProduct = () => {

    const { _id } = useParams()
    const history = useHistory()

    const [productInfo, setProductinfo] = useState({})

    const deleteProductOne = ()=>{
        console.log("deleteeeee")
        axios.delete(`http://localhost:8000/api/product/${productInfo._id}`)
            .then(res=>{
                console.log("res is ", res)
                history.push("/")
            })
            .catch(err=> console.log("err is", err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res=>{
                console.log("this is the res", res)
                setProductinfo(res.data.results)
            })
            .catch(err=>console.log("your err is ", err))
    },[])

    return (
        <div>
            <h1>Info About {productInfo.title}</h1>
            <p>Name: {productInfo.title}</p>
            <p>Description: {productInfo.description}</p>
            <p>Price: {productInfo.price}</p>
            <p onClick={deleteProductOne} className="btn btn-danger">Delete Product</p>
        </div>
    );
};



export default OneProduct;