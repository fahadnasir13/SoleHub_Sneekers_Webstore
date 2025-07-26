
import { getProductsByCategory } from '../../../lib/products';
import CategoryProducts from './CategoryProducts';

export async function generateStaticParams() {
  return [
    { category: 'running' },
    { category: 'basketball' },
    { category: 'lifestyle' },
    { category: 'skateboarding' }
  ];
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return <CategoryProducts categoryName={category} />;
}
