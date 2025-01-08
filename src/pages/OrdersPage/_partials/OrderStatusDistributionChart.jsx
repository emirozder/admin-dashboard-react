import { motion } from "framer-motion";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ORDER_STATUS_DISTRIBUTION_CHART_COLORS,
  ORDER_STATUS_DISTRIBUTION_CHART_DATA,
} from "../../../utils/consts";

const OrderStatusDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Order Status Distribution
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={ORDER_STATUS_DISTRIBUTION_CHART_DATA}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {ORDER_STATUS_DISTRIBUTION_CHART_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    ORDER_STATUS_DISTRIBUTION_CHART_COLORS[
                      index % ORDER_STATUS_DISTRIBUTION_CHART_COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default OrderStatusDistributionChart;
