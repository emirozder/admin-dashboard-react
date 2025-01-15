import { motion } from "framer-motion";
import DailyOrdersChart from "../components/OrdersPage/DailyOrdersChart";
import OrdersTable from "../components/OrdersPage/OrdersTable";
import OrderStatusDistributionChart from "../components/OrdersPage/OrderStatusDistributionChart";
import PageHeaderTitle from "../components/PageTitleHeader";
import StatCard from "../components/StatCard";
import { ORDERS_STAT_CARD_ITEMS } from "../utils/consts";

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* PAGE TITLE */}
      <PageHeaderTitle title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {ORDERS_STAT_CARD_ITEMS.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrdersChart />
          <OrderStatusDistributionChart />
        </div>

        {/* ORDERS TABLE */}
        <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
