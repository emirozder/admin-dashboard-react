import { motion } from "framer-motion";
import AiPoweredInsights from "../components/AnalyticsPage/AiPoweredInsights";
import AnalyticsStatCards from "../components/AnalyticsPage/AnalyticsStatCards";
import ChannelPerformanceChart from "../components/AnalyticsPage/ChannelPerformanceChart";
import CustomerSegmentationChart from "../components/AnalyticsPage/CustomerSegmentationChart";
import ProductPerformanceChart from "../components/AnalyticsPage/ProductPerformanceChart";
import RevenueTargetChart from "../components/AnalyticsPage/RevenueTargetChart";
import UserRetentionChart from "../components/AnalyticsPage/UserRetentionChart";
import PageHeaderTitle from "../components/PageTitleHeader";
import { ANALYTICS_STAT_CARD_ITEMS } from "../utils/consts";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* PAGE TITLE */}
      <PageHeaderTitle title="Analytics" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {ANALYTICS_STAT_CARD_ITEMS.map((item, index) => (
            <AnalyticsStatCards key={index} {...item} />
          ))}
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RevenueTargetChart />
          <ChannelPerformanceChart />
          <ProductPerformanceChart />
          <UserRetentionChart />
          <CustomerSegmentationChart />
        </div>

        <AiPoweredInsights />
      </main>
    </div>
  );
};

export default AnalyticsPage;
