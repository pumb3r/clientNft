// возоможние маршрути для авторизированих пользователь и нет
import { Admin, Auth, BasketPage, CartItemPage, CreatePage, MainPage, ShopPage } from './pages';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CARTITEM_ROUTE,
  CREATE_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTATION_ROUTE,
  SHOPPAGE_ROUTE,
} from './untils/consts';
export const authRoutes = [
  // типо админ панелька
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: CREATE_ROUTE,
    Component: CreatePage,
  },

  {
    path: BASKET_ROUTE,
    Component: BasketPage,
  },
  // пользователь которий залогинился может зайти в админ панель и в коризну => дефолт работяга так не может зделать
];
export const publicRoutes = [
  {
    path: SHOPPAGE_ROUTE,
    Component: ShopPage,
  },
  {
    path: MAINPAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: CARTITEM_ROUTE + '/:id',
    Component: CartItemPage,
  },
  {
    path: REGISTATION_ROUTE,
    Component: Auth,
  },
];
