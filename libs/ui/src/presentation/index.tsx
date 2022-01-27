import { Text } from 'native-base';
import { CategoryNavigation, HomeNavigation, ProductNavigation } from '../native/natigation/navigation.native';
import { Bag } from './bag';
import { CategoryList } from './category/list';
import { Discovery } from './discovery';
import { ProductList } from './product/list';
import { Product } from './product/single';
import { Profile } from './profile';
import { ScanAndGo } from './scan-and-go';

export const Pages: Record<string, () => JSX.Element> = {
  home: HomeNavigation,
  bag: Bag,
  discover: Discovery,
  scanAndGo: ScanAndGo,
  profile: Profile,
  categoryList: CategoryNavigation,
  productList: ProductNavigation,
  product: Product
};

export const Fallback = () => {
  return <Text>404</Text>;
};
