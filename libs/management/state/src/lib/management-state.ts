const mockData = {
  schema: {
    home: {
      layout: [
        'region_dropdown',
        'user_nav',
        'search',
        'popular',
        'category_list',
      ],
    },
    category_list: {
      layout: ['region_dropdown', 'back_nav', 'product_list'],
    },
    product_list: {
      layout: ['region_dropdown', 'search', 'filter_nav', 'product_card_list'],
    },
    product: {
      layout: [
        'product_image',
        'product_action',
        'product_title',
        'product_price',
        'product_about',
        { buttons: ['purchase'] },
        { hidden: 'toast' },
      ],
    },
    basket: {
      layout: [
        'quantity_nav',
        'inc_dec_nav',
        'subtotal',
        { buttons: ['cancel', 'add to bag'] },
      ],
    },
  },
  navigation: ['home', 'discover', 'scan-and-go', 'bag', 'profile'],
};

export const getLayout = () => {
  return mockData.schema;
};

export function getNavigation() {
  return mockData.navigation;
}

export function getCategoryList() {
  return [
    {category: 'fashion', imgUri: ''},
    {category: 'dining', imgUri: ''},
    {category: 'health-and-beauty', imgUri: ''},
    {category: 'wine-and-spirits', imgUri: ''},
    {category: 'automotive', imgUri: ''},
  ]
}