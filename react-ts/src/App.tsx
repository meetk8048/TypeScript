import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { title } from "process";
import Product from './components/Product';

export interface IProduct {
  id: number;
  title: string;
  price: number;
}
function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "iphone",
      price: 10.0
    },
    {
      id: 2,
      title: "samsung",
      price: 20.0
    }
  ]);
  function handleAddToCart(id: number) {
    console.log("Added to cart", id);
  }
  return (
    <>
      {
        products.map(product =>
          <Product
            product={product}
            key={product.id}
            handleAddToCartClick={handleAddToCart} />)
      }
    </>
  );
}

export default App;
