import React from 'react';

const SimilerProductCard = ({ products }) => {
  console.log('Rendering SimilerProductCard', products);
  
  // Add a check to ensure products is defined and is an array
  if (!products || !Array.isArray(products)) {
    return <div>No similar products available</div>;
  }

  return (
    <div className="similer-product-card">
      <h2>Similar Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SimilerProductCard;
