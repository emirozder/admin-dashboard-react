import { motion } from "framer-motion";
import CategoryDistributionChart from "../components/OverviewPage/CategoryDistributionChart";
import SalesChannelChart from "../components/OverviewPage/SalesChannelChart";
import SalesOverviewChart from "../components/OverviewPage/SalesOverviewChart";
import PageHeaderTitle from "../components/PageTitleHeader";
import StatCard from "../components/StatCard";
import { OVERVIEW_STAT_CARD_ITEMS } from "../utils/consts";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* PAGE TITLE */}
      <PageHeaderTitle title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {OVERVIEW_STAT_CARD_ITEMS.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
