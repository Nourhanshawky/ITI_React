import React from 'react';

const Card = ({ title, description,stock,images,price }) => {
  return (
    <div className="card">
      <img src={images} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Stock: {stock}</p>
      <p>Price: {price}$</p>
      <button style={{ marginRight: '10px', fontSize: '16px', padding: '8px 12px', backgroundColor: '#000000', color: '#ffffff', border: 'none', borderRadius: '4px'}}>Buy</button>
    </div>
  );
}

export default Card;
