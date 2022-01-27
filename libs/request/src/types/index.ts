export type NavigationOptions =
  | 'home'
  | 'discover'
  | 'scan & go'
  | 'bag'
  | 'profile';
export type Containers =
  | 'region_dropdown'
  | 'user_nav'
  | 'search'
  | 'popular'
  | 'category_list'
  | 'back_nav'
  | 'product_list'
  | 'filter_nav'
  | 'product_card_list'
  | 'product_image'
  | 'product_action'
  | 'product_title'
  | 'product_price'
  | 'product_about'
  | 'product_purchase'
  | 'quantity_nav'
  | 'inc_dec_nav'
  | 'subtotal';
export type Hiddens = 'toast';
export type Buttons = 'cancel' | 'purchase' | 'add to bag';
export interface IComplexContainers {
  button?: Buttons[];
  hidden?: Hiddens;
}
export type Pages =
  | 'home'
  | 'category_list'
  | 'product_list'
  | 'product'
  | 'basket';
export interface ILayouts {
  schema: Record<Pages, { layout: Containers[] | IComplexContainers }>;
  navigation: NavigationOptions[];
}
