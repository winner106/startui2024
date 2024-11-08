import 'dayjs/locale/ar';
import zod from 'zod-i18n-map/locales/ar/zod.json';

import account from './account.json';
import admin from './admin.json';
import adminDashboard from './adminDashboard.json';
import app from './app.json';
import appHome from './appHome.json';
import auth from './auth.json';
import common from './common.json';
import components from './components.json';
import emails from './emails.json';
import management from './management.json';
import products from './products.json';
import users from './users.json';

export default {
  account,
  admin,
  adminDashboard,
  app,
  appHome,
  auth,
  common,
  components,
  emails,
  management,
  products,
  users,
  zod,
} as const;
