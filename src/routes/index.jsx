import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import OrdersPage from "../pages/OrdersPage/OrdersPage.jsx";
import OverviewPage from "../pages/OverviewPage/OverviewPage.jsx";
import ProductsPage from "../pages/ProductsPage/ProductsPage.jsx";
import SalesPage from "../pages/SalesPage/SalesPage.jsx";
import SettingsPage from "../pages/SettingsPage/SettingsPage.jsx";
import UsersPage from "../pages/UsersPage/UsersPage.jsx";

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
