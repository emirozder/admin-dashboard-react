import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import OverviewPage from "../pages/OverviewPage/OverviewPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SalesPage from "../pages/SalesPage/SalesPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import UsersPage from "../pages/UsersPage/UsersPage";

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
