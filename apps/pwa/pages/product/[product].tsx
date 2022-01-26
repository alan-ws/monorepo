import { FC } from 'react';
import { Product, ProductList } from '@kaddra-app/ui';
import { useRouter } from 'next/router';

export const Products: FC = () => {
  const router = useRouter();

  if (router.query.name) return <Product />;

  return <ProductList />;
};

export default Products;
