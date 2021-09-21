import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import axios from 'axios';


const EditProduct = () => {

    const { _id } = useParams()

    const history = useHistory()

    const [productInfo, setProductInfo] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res=>{
                console.log("this is the res", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("your err is ", err))
    },[])

    const changeHandler = (e)=>{
        console.log("form is getting there")
        setProductInfo({
            ...productInfo,
            [e.target.name]:e.target.value
        })
    }


    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${_id}`, productInfo)
            .then(res=>{
                console.log("res is ", res)
                history.push("/")
            })
            .catch(err=>console.log("err is ", err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput" name="title" value={productInfo.title} />
                    {/* <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="description" value={productInfo.description} />
                    {/* <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Price</label>
                    <input type="number" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="price" value={productInfo.price}/>
                    {/* <p className="text-danger">{validationErrors.price? validationErrors.price.message: ""}</p> */}
                </div><br />
                <input className="btn btn-primary" type="submit" value="Update Product" />
            </form>
        </div>
    );
};


export default EditProduct;