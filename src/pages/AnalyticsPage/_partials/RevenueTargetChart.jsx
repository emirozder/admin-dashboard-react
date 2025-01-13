import { motion } from "framer-motion";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  REVENUE_TARGET_CHART_MONTHLY_DATA,
  REVENUE_TARGET_CHART_QUARTERLY_DATA,
  REVENUE_TARGET_CHART_WEEKLY_DATA,
  REVENUE_TARGET_CHART_YEARLY_DATA,
} from "../../../utils/consts";

const RevenueTargetChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState(2);
  const [chartData, setChartData] = useState(REVENUE_TARGET_CHART_MONTHLY_DATA);
  const [chartDataKey, setChartDataKey] = useState("month");

  const timeRangeData = {
    1: { data: REVENUE_TARGET_CHART_WEEKLY_DATA, key: "week" },
    2: { data: REVENUE_TARGET_CHART_MONTHLY_DATA, key: "month" },
    3: { data: REVENUE_TARGET_CHART_QUARTERLY_DATA, key: "quarter" },
    4: { data: REVENUE_TARGET_CHART_YEARLY_DATA, key: "year" },
  };

  const handleChartData = (value) => {
    setSelectedTimeRange(value);
    const selectedData = timeRangeData[value] || { data: [], key: "unknown" };
    setChartData(selectedData.data);
    setChartDataKey(selectedData.key);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Revenue vs Target
        </h2>

        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 
          focus:ring-blue-500
          "
          value={selectedTimeRange}
          onChange={(e) => handleChartData(e.target.value)}
        >
          <option value={1}>Weekly</option>
          <option value={2}>Monthly</option>
          <option value={3}>Quarterly</option>
          <option value={4}>Yearly</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={chartDataKey} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueTargetChart;
