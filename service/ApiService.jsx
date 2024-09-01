const BASE_URL = 'https://dummyjson.com';

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products?limit=10`);
        if (!response.ok) {
            throw new Error('Error en fetch');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getUniqueCategories = async () => {
    try {
        const products = await getAllProducts();
        const categories = [...new Set(products.map(product => product.category))];
        return categories.filter(category => category);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getUniqueBrands = async () => {
    try {
        const products = await getAllProducts();
        const brands = [...new Set(products.map(product => product.brand))];
        return brands.filter(brand => brand);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getUniqueDiscounts = async () => {
    try {
        const products = await getAllProducts();
        const discountPercentages = [...new Set(products.map(product => product.discountPercentage))];
        return discountPercentages.filter(discountPercentage => discountPercentage);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
