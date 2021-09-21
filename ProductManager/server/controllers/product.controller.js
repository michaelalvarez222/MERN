const Product = require("../models/product.model")



module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.createNewProduct = (req,res)=>{
    Product.create(req.body)
        .then(newProductObj=>{
            res.json({results: newProductObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneProduct = (req,res)=>{
    console.log(req.params)
    Product.findOne({_id: req.params.id})
        .then(foundProduct=>{
            res.json({results: foundProduct})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateProduct = (req,res) => {
    Product.findByIdAndUpdate(
        { _id: req.params.id},
        req.body,
        { new: true, runValidators: true } 
    )
        .then(updatedProduct => {
            res.json({ user: updatedProduct })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct =>{
            res.json({results: deletedProduct})
        })
        .catch(err=>{
            res.json({err:err})
        })

}