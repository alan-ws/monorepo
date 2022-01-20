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
    { category: 'fashion', imgUri: 'https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=20&m=1257563298&s=170667a&w=0&h=Hhf0-AsQp7Z7k9q8XKHfQUY86uPJvE8vmmGHXihWS_M=' },
    { category: 'dining', imgUri: 'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/hero-and-hub/dining-out/dining_out_467823860.jpg' },
    { category: 'health-and-beauty', imgUri: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg' },
    { category: 'wine-and-spirits', imgUri: 'https://golf.com/wp-content/uploads/2020/10/wine-glass-1024x576.jpg' },
    { category: 'automotive', imgUri: 'https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/Industries/Making-Automotive-Flow.png?rev=36ee2979910d404387bd2692c778b203&cx=0&cy=0&cw=1364&ch=767&hash=599981463276342C2BFA33F408E64739' },
  ];
}

export function getCategories(name: string) {
  return ['champagne', 'wine', 'sake', 'accessories'];
}

export function getRegions() {
  return ['singapore', 'hong kong']
}

export function getProfile() {
  return {
    name: 'Will',
    notifications: 5,
    bookmarks: 2,
    history: false
  }
}

// const mockData = {
//   schema: {
//     home: {
//       layout: [
//         { dropdown: 'region_dropdown', route: false },
//         { nav: ['name', 'bookmark', 'notification'], route: true },
//         { search: 'search', route: false },
//         { banner: 'popular', route: true },
//         { list: 'category_list', route: true },
//       ],
//     },
//     category_list: {
//       layout: ['region_dropdown', 'back_nav', 'product_list'],
//     },
//     product_list: {
//       layout: ['region_dropdown', 'search', 'filter_nav', 'product_card_list'],
//     },
//     product: {
//       layout: [
//         'product_image',
//         'product_action',
//         'product_title',
//         'product_price',
//         'product_about',
//         { buttons: ['purchase'] },
//         { hidden: 'toast' },
//       ],
//     },
//     basket: {
//       layout: [
//         'quantity_nav',
//         'inc_dec_nav',
//         'subtotal',
//         { buttons: ['cancel', 'add to bag'] },
//       ],
//     },
//   },
//   navigation: ['home', 'discover', 'scan-and-go', 'bag', 'profile'],
// };
