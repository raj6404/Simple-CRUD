const Product = require('../models/product.model');

// get Products
const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)
       } catch(error){
      res.status(500).json({message:error.message});
       }
}

// get Product by Id

const getProduct = async(req,res) => {
    try{
      const {id}   = req.params;
     const product = await Product.findById(id);
     res.status(200).json(product)
    } catch(error){
   res.status(500).json({message:error.message});
    }
   }

   // Create Products
   const createProducts = async(req,res)=>{
    // console.log(req.body);
    // res.send(req.body);
    try{
  const product = await Product.create(req.body);
  res.status(200).json(product)
    } catch(error){
      res.send(500).json({message:error.message});
    }
  
  }

  // Update Product
  const updateProduct = async(req,res)=>{
    try{
      const {id} = req.params;
  const product = await Product.findByIdAndUpdate(id,req.body);
  
  if(!product){
    return res.status(404).json({message:"Product Not Found"}); 
  }
  const updatedProduct = await Product.findById(id);
  res.status(200).json(updatedProduct);
    }
    catch(err){
  res.status(500).json({message:err.message});
    }
  }

  // Delete Product
  const deleteProduct = async(req,res)=>{
    try{
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if(!product){
    return res.status(404).json({message:'Product Not Found'});
  }
  res.status(200).json({message:'Product Deleted Successfully'});
    }
    catch(error){
  res.status(500).json({message:error.message});
    }
  }

module.exports = {
    getProducts,
    getProduct,
    createProducts,
    updateProduct,
    deleteProduct
};