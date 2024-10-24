import { useState } from 'react';
import { initialProducts } from '../context/FilterContext';
import ProductFilter from '../Components/ProductFilter';
import ProductList from '../Components/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([...initialProducts]);
  const [category, setCategory] = useState('Todas');
  const [search, setSearch] = useState('');

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }
  return (

      <div style={{ padding: '20px' }}>
        <h2>Productos</h2>
        <ProductFilter category={category} handleCategoryChange={handleCategoryChange} search={search} handleSearchChange={handleSearchChange}/>
        <ProductList items={products} category={category} search={search}/>
      </div>

  );
};

export default ProductsPage;
