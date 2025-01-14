import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "../../src/pages/AnalyticsPage/index";
import NotFoundPage from "../../src/pages/NotFoundPage/index";
import OrdersPage from "../../src/pages/OrdersPage/index";
import OverviewPage from "../../src/pages/OverviewPage/index";
import ProductsPage from "../../src/pages/ProductsPage/index";
import SalesPage from "../../src/pages/SalesPage/index";
import SettingsPage from "../../src/pages/SettingsPage/index";
import UsersPage from "../../src/pages/UsersPage/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
