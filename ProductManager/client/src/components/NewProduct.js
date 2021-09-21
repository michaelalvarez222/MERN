import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router';


const NewProduct = () => {

    const history = useHistory()

    let [formInfo, setFormInfo] = useState({
        title: null,
        description: null,
        price: null
    })

    let [validationErrors, setValidationErrors] = useState({})

    const changeHandler = (e)=>{
        console.log("form is getting there")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("the info is",formInfo)
        axios.post("http://localhost:8000/api/product/create", formInfo)
            .then(res=>{
                if(res.data.err){
                    setValidationErrors(res.data.err.errors)

                }
                else{
                    console.log("res is ", res)
                    history.push("/")
                }
            })
            .catch(err=>console.log("err is", err))
    }

    return (
        <div>
            <h1>Create Your Product Below</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput" name="title" placeholder="Example input"/>
                    <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="description" placeholder="Another input"/>
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Price</label>
                    <input type="number" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="price" placeholder="Another input"/>
                    <p className="text-danger">{validationErrors.price? validationErrors.price.message: ""}</p>
                </div><br />
                <input className="btn btn-primary" type="submit" value="Create Product" />
            </form>

        </div>
    );
};


export default NewProduct;