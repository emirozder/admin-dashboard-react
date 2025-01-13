import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  PRODUCT_PERFORMANCE_CHART_COLORS,
  PRODUCT_PERFORMANCE_CHART_DATA,
} from "../../../utils/consts";

const ProductPerformanceChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Product Performance
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={PRODUCT_PERFORMANCE_CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            {Object.keys(PRODUCT_PERFORMANCE_CHART_DATA[0]).map(
              (key, index) => {
                if (key !== "name")
                  return (
                    <Bar
                      key={index}
                      dataKey={key}
                      fill={PRODUCT_PERFORMANCE_CHART_COLORS[index - 1]}
                    />
                  );
              }
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformanceChart;
