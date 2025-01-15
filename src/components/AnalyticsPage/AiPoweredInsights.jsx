import { motion } from "framer-motion";
import { AI_POWERED_INSIGHTS } from "../../utils/consts";

const AiPoweredInsights = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-6">
        AI-Powered Insights
      </h2>

      <div className="space-y-8">
        {AI_POWERED_INSIGHTS.map((item, index) => (
          <div key={index} className="flex items-center space-x-5 ml-2">
            <item.icon className={`size-6 ${item.color}`} />
            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AiPoweredInsights;
