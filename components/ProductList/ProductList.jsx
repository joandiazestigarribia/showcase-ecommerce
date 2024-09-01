'use client'

import { useState, useEffect } from 'react';
import { Card, ColumnSelector, Loader, Sidebar } from "@/components";

export function ProductList({ initialProducts, brands, categories, discountPercentages }) {
    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState([]);
    const [columnCount, setColumnCount] = useState(2);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const updateColumnCount = () => {
            if (window.innerWidth < 768) {
                setColumnCount(1);
            } else if (window.innerWidth >= 1024) {
                setColumnCount(4);
            } else {
                setColumnCount(3);
            }
        };

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);
        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

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
    if (!isClient) {
        return <Loader/>;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 xl:min-w-[1200px] max-lg:w-11/12 max-md:mt-16">
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
            <div className="flex-grow xl:min-w-[1020px]">
                <ColumnSelector columnCount={columnCount} setColumnCount={setColumnCount} />
                <Card products={filteredProducts} columnCount={columnCount} />
            </div>
        </div>
    );
}