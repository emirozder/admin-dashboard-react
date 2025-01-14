import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "/src/pages/AnalyticsPage/index.jsx";
import NotFoundPage from "/src/pages/NotFoundPage/index.jsx";
import OrdersPage from "/src/pages/OrdersPage/index.jsx";
import OverviewPage from "/src/pages/OverviewPage/index.jsx";
import ProductsPage from "/src/pages/ProductsPage/index.jsx";
import SalesPage from "/src/pages/SalesPage/index.jsx";
import SettingsPage from "/src/pages/SettingsPage/index.jsx";
import UsersPage from "/src/pages/UsersPage/index.jsx";

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
