import { ProductList } from '@/components';
import { getAllProducts, getUniqueBrands, getUniqueCategories, getUniqueDiscounts } from '@/service/ApiService';

export default async function Home() {
  const [products, categories, brands, discountPercentages] = await Promise.all([
    getAllProducts(),
    getUniqueCategories(),
    getUniqueBrands(),
    getUniqueDiscounts()
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <ProductList initialProducts={products} categories={categories} brands={brands} discountPercentages={discountPercentages} />
    </main>
  );
}