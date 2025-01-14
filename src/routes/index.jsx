import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "../pages/AnalyticsPage";
import NotFoundPage from "../pages/NotFoundPage";
import OrdersPage from "../pages/OrdersPage";
import OverviewPage from "../pages/OverviewPage";
import ProductsPage from "../pages/ProductsPage";
import SalesPage from "../pages/SalesPage";
import SettingsPage from "../pages/SettingsPage";
import UsersPage from "../pages/UsersPage";

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
