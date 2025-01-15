import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const AnalyticsStatCards = ({ title, value, change, icon: Icon }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 px-4 py-5 sm:p-6"
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="flex items-center text-sm font-medium text-gray-400">
            {title}
          </span>
          <p className="mt-1 text-xl font-semibold text-gray-100">{value}</p>
        </div>
        <div
          className={`p-3 rounded-full bg-opacity-20 ${
            change >= 0 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <Icon
            size={20}
            className={`size-6 ${
              change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          />
        </div>
      </div>
      <div
        className={`mt-4 flex items-center justify-start text-sm ${
          change >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {change >= 0 ? (
          <ArrowUpRight size="20" />
        ) : (
          <ArrowDownRight size="20" />
        )}
        <span className="ml-1 font-semibold">{change}%</span>
        <span className="ml-1 text-gray-400">vs last period</span>
      </div>
    </motion.div>
  );
};

export default AnalyticsStatCards;
