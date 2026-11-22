import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/products', (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 19.99 },
      { id: 3, name: 'Product 3', price: 5.99 }
    ] 
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});