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
  USER_DEMOGRAPHICS_CHART_COLORS,
  USER_DEMOGRAPHICS_CHART_DATA,
} from "../../utils/consts";

const UserDemographicsChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        User Demographics
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={USER_DEMOGRAPHICS_CHART_DATA}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ period, percent }) =>
                `${period} -> ${(percent * 100).toFixed(0)}%`
              }
            >
              {USER_DEMOGRAPHICS_CHART_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    USER_DEMOGRAPHICS_CHART_COLORS[
                      index % USER_DEMOGRAPHICS_CHART_COLORS.length
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

export default UserDemographicsChart;
