import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/index.jsx";
import AnalyticsPage from "./pages/AnalyticsPage/index.jsx";
import NotFoundPage from "./pages/NotFoundPage/index.jsx";
import OrdersPage from "./pages/OrdersPage/index.jsx";
import OverviewPage from "./pages/OverviewPage/index.jsx";
import ProductsPage from "./pages/ProductsPage/index.jsx";
import SalesPage from "./pages/SalesPage/index.jsx";
import SettingsPage from "./pages/SettingsPage/index.jsx";
import UsersPage from "./pages/UsersPage/index.jsx";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />

      {/* Routes */}
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
    </div>
  );
}

export default App;
