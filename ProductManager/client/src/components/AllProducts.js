import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    const [deleteProductClicked, setDeleteProductClicked] = useState()

    const history = useHistory()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                console.log("this the res",res)
                setAllProducts(res.data.results)
            })
            .catch(err=> console.log("this the err",err))
    },[deleteProductClicked])

    const deleteProduct = (e,productId)=>{
        console.log("deleteeeee", e,productId)
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res=>{
                console.log("res is ", res)
                setDeleteProductClicked(!deleteProductClicked)
                
            })
            .catch(err=> console.log("err is", err))
    }

    return (
        <div>
            <h3>All The Products</h3>
            {allProducts.map((product,i)=>{
                return <div key={i} className="card">
                <div className="card-body">
                    <h4 className="card-title"><Link to={`/product/${product._id}`}>{product.title}</Link> | <Link to={`/product/edit/${product._id}`}>Edit</Link></h4>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}$</p>
                    <p onClick={(e)=>deleteProduct(e,product._id)} className="btn btn-danger">Delete Product</p>
                </div>
                </div>
            
            })}
        </div>
    );
};


export default AllProducts;