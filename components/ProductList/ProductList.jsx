'use client'

import { useState, useEffect } from 'react';
import { Card, Sidebar } from "@/components";

export function ProductList({ initialProducts, brands, categories, discountPercentages }) {
    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState([]);

    useEffect(() => {
        let filtered = products;
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }
        if (selectedBrands.length > 0) {
            filtered = filtered.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }
        if (selectedDiscounts.length > 0) {
            filtered = filtered.filter(product =>
                selectedDiscounts.includes(product.discountPercentage)
            );
        }
        setFilteredProducts(filtered);
    }, [selectedCategories, selectedBrands, selectedDiscounts, products]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => {
            if (category === '') return [];
            if (prev.includes(category)) {
                return prev.filter(c => c !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prev => {
            if (brand === '') return [];
            if (prev.includes(brand)) {
                return prev.filter(b => b !== brand);
            } else {
                return [...prev, brand];
            }
        });
    };

    const handleDiscountChange = (discountPercentage) => {
        setSelectedDiscounts(prev => {
            if (discountPercentage === '') return [];
            if (prev.includes(discountPercentage)) {
                return prev.filter(b => b !== discountPercentage);
            } else {
                return [...prev, discountPercentage];
            }
        });
    };

    return (
        <div className="flex gap-8 min-w-[1200px]">
            <Sidebar
                handleBrandChange={handleBrandChange}
                brands={brands}
                selectedBrands={selectedBrands}
                handleCategoryChange={handleCategoryChange}
                categories={categories}
                selectedCategories={selectedCategories}
                handleDiscountChange={handleDiscountChange}
                discountPercentages={discountPercentages}
                selectedDiscounts={selectedDiscounts}
            />
            <Card products={filteredProducts} />
        </div>
    );
}