import React from 'react';
import './App.css';
import Iphone9 from './Images/Iphone9.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDescription, updateQuantity } from './actions/productActions';

function App() {
  const dispatch = useDispatch();
  const showDescription = useSelector((state) => state.products.showDescription);
  const selectedQuantity = useSelector((state) => state.products.selectedQuantity);

  const calculateSubtotal = (product) => {
    const quantity = selectedQuantity[product.id] || 0;
    const price = product.price * quantity;
    const shippingCharges = quantity > 1 ? 0 : (quantity === 1 ? 40 : 0);
    return price + shippingCharges;
  };

  const products = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'The iPhone 9 boasts a sleek design and powerful performance, offering users a seamless experience with its advanced features and impressive camera capabilities.',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: Iphone9,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <img src={product.thumbnail} className="card-img-left" alt={product.title} />
                <div className="card-body">
                  <h2>{product.title}</h2>
                  <h4
                    className="toggle-description"
                    onClick={() => dispatch(toggleDescription(product.id))}
                  >
                    {showDescription[product.id] ? 'Details  ▲' : 'Details  ▼'}
                  </h4>
                  {showDescription[product.id] && (
                    <p>{product.description}</p>
                  )}
                  <p><b>Brand{' '}</b>{product.brand}</p>
                  <p className="card-text">
                    <b>Price{' '}</b>${product.price}
                    <br />
                    <button onClick={() => dispatch(updateQuantity(product.id, -1))}>-</button>
                    {' '}
                    {selectedQuantity[product.id] || 0}
                    {' '}
                    <button onClick={() => dispatch(updateQuantity(product.id, 1))}>+</button>
                  </p>
                  <p className="card-text"><b>Category{' '}</b>{product.category}</p>
                  <p className="card-text">
                    <b>Shipping Charges: </b>
                    {selectedQuantity[product.id] > 1 ? 'Free' : (selectedQuantity[product.id] === 1 ? '₹40' : '₹0')}
                  </p>
                  <p className="card-text">
                    <b>Subtotal: </b>${calculateSubtotal(product)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
