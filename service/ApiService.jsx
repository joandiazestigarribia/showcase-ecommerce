
const BASE_URL = 'https://dummyjson.com';

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products?limit=10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getUniqueCategories = async () => {
    try {
        const products = await getAllProducts();
        const categories = [...new Set(products.map(product => product.category))];
        return categories.filter(category => category); // Remove any undefined or null values
    } catch (error) {
        console.error('Error fetching unique categories:', error);
        throw error;
    }
};

export const getUniqueBrands = async () => {
    try {
        const products = await getAllProducts();
        const brands = [...new Set(products.map(product => product.brand))];
        return brands.filter(brand => brand); // Remove any undefined or null values
    } catch (error) {
        console.error('Error fetching unique brands:', error);
        throw error;
    }
};

export const getUniqueDiscounts = async () => {
    try {
        const products = await getAllProducts();
        const discountPercentages = [...new Set(products.map(product => product.discountPercentage))];
        return discountPercentages.filter(discountPercentage => discountPercentage); // Remove any undefined or null values
    } catch (error) {
        console.error('Error fetching unique discounts:', error);
        throw error;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${category}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};