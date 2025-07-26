
import { getProductsByBrand, brands } from '../../../lib/products';
import BrandProducts from './BrandProducts';

export async function generateStaticParams() {
  return brands.map(brand => ({
    brand: brand.name.toLowerCase()
  }));
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  return <BrandProducts brandName={brand} />;
}
