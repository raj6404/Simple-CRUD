const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api/products',productRoute);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
      console.log(`Express server listening on port ${port}`);
  });



app.get('/',(req,res) => {
    res.send("Currently NodeJs Can be Processing...");
    // res.end()
});


// // Get Products
// app.get('/api/products',async(req,res) => {
//  try{
//   const products = await Product.find({});
//   res.status(200).json(products)
//  } catch(error){
// res.status(500).json({message:error.message});
//  }
// });

// //Get Product by Id
// app.get('/api/product/:id',async(req,res) => {
//   try{
//     const {id}   = req.params;
//    const product = await Product.findById(id);
//    res.status(200).json(product)
//   } catch(error){
//  res.status(500).json({message:error.message});
//   }
//  });

// //POST
// app.post('/api/products',async(req,res)=>{
//   // console.log(req.body);
//   // res.send(req.body);
//   try{
// const product = await Product.create(req.body);
// res.status(200).json(product)
//   } catch(error){
//     res.send(500).json({message:error.message});
//   }

// });

//Update a Product
// app.put('/api/product/:id',async(req,res)=>{
//   try{
//     const {id} = req.params;
// const product = await Product.findByIdAndUpdate(id,req.body);

// if(!product){
//   return res.status(404).json({message:"Product Not Found"}); 
// }
// const updatedProduct = await Product.findById(id);
// res.status(200).json(updatedProduct);
//   }
//   catch(err){
// res.status(500).json({message:err.message});
//   }
// });

//Delete a Product
// app.delete('/api/product/:id',async(req,res)=>{
//   try{
// const { id } = req.params;
// const product = await Product.findByIdAndDelete(id);
// if(!product){
//   return res.status(404).json({message:'Product Not Found'});
// }
// res.status(200).json({message:'Product Deleted Successfully'});
//   }
//   catch(error){
// res.status(500).json({message:error.message});
//   }
// });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/apitest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

