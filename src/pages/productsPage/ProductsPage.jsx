import { motion } from "framer-motion";
import PageHeaderTitle from "../../components/PageTitleHeader";
import StatCard from "../../components/StatCard";
import { PRODUCTS_STAT_CARD_ITEMS } from "../../utils/consts";
import ProductsTable from "./_partials/ProductsTable";
import SalesProductsDistributionChart from "./_partials/SalesProductsDistributionChart";
import SalesTrendChart from "./_partials/SalesTrendChart";
const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* PAGE TITLE */}
      <PageHeaderTitle title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {PRODUCTS_STAT_CARD_ITEMS.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </motion.div>

        {/* PRODUCTS TABLE */}
        <ProductsTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <SalesProductsDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
