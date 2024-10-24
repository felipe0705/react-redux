import React from 'react';
import { FilterProvider } from '../context/FilterContext';
import ProductFilter from '../Components/ProductFilter';
import ProductList from '../Components/ProductList';

const ProductsPage = () => {
  return (
    <FilterProvider>
      <div style={{ padding: '20px' }}>
        <h2>Productos</h2>
        <ProductFilter />
        <ProductList />
      </div>
    </FilterProvider>
  );
};

export default ProductsPage;
