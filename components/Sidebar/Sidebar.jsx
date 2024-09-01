import React from 'react'
import Brand from './Brand';
import Category from './Category';
import DiscountPercentage from './DiscountPercentage';

const Sidebar = ({
  handleBrandChange,
  brands,
  selectedBrands = [],
  handleCategoryChange,
  categories,
  selectedCategories = [],
  handleDiscountChange,
  discountPercentages,
  selectedDiscounts = []
}) => {
  return (
    <section className="sidebar max-w-72 min-w-64">
      <div className="sidebar-container">
        <h1 className='primary-black font-black text-2xl pb-1 mb-3 border-b-[1px] border-b-primary-black'>Productos</h1>
        <h1 className='primary-black font-black'>Filtrar</h1>
      </div>
      <Category
        handleCategoryChange={handleCategoryChange}
        categories={categories}
        selectedCategories={selectedCategories}
      />
      <Brand
        handleBrandChange={handleBrandChange}
        brands={brands}
        selectedBrands={selectedBrands}
      />
      <DiscountPercentage
        handleDiscountChange={handleDiscountChange}
        discountPercentages={discountPercentages}
        selectedDiscounts={selectedDiscounts}
      />
    </section>
  );
};

export default Sidebar;