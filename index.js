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

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/apitest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

