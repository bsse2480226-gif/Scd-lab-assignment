import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.thumbnail}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-secondary align-self-start mb-2 text-capitalize">
            {product.category}
          </span>
          <h5 className="card-title text-truncate" title={product.title}>
            {product.title}
          </h5>
          <p className="card-text text-muted small flex-grow-1">
            {product.description.length > 80
              ? `${product.description.substring(0, 80)}...`
              : product.description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fs-5 fw-bold text-success">${product.price}</span>
            <span className="badge bg-warning text-dark">
              ★ {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 