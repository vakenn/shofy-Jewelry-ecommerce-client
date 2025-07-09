const menu_data = [
  {
    id: 1,
    single_link: true,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Bandes Plâtrées', link: '/products/bandes-platrees' },
      { title: 'Bandes Jersey', link: '/products/bandes-jersey' },
      { title: 'Compresses N.S', link: '/products/compresses-ns' },
      { title: 'Cotton Soft', link: '/products/cotton-soft' },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: 'About',
    link: '/about',
  },
  {
    id: 4,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    single_link: true,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    single_link: true,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Bandes Plâtrées', link: '/products/bandes-platrees' },
      { title: 'Bandes Jersey', link: '/products/bandes-jersey' },
      { title: 'Compresses N.S', link: '/products/compresses-ns' },
      { title: 'Cotton Soft', link: '/products/cotton-soft' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'eCommerce',
    link: '/cart',
    sub_menus: [
      { title: 'Shopping Cart', link: '/cart' },
      { title: 'Compare', link: '/compare' },
      { title: 'Wishlist', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'My account', link: '/profile' },
    ],
  },
  {
    id: 5,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: '404 Error', link: '/404' },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]