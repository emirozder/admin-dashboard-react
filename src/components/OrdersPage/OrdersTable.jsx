import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { ORDERS_TABLE_DATA } from "../../utils/consts";

const OrdersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [Orders, setOrders] = useState(ORDERS_TABLE_DATA);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filteredOrders = ORDERS_TABLE_DATA.filter(
      (order) =>
        order.customer.toLowerCase().includes(value.toLowerCase()) ||
        order.status.toLowerCase().includes(value.toLowerCase()) ||
        order.date.toLowerCase().includes(value.toLowerCase())
    );
    setOrders(filteredOrders);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col justify-between items-center mb-6 sm:flex-row">
        <h2 className="text-xl font-semibold text-gray-100">Orders List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white place-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchValue}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {[
                "Order ID",
                "Customer",
                "Total",
                "Status",
                "Date",
                "Actions",
              ].map((item, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {Orders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">
                  <span>{order.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">
                  <span>{order.customer}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span>${order.total}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex leading-5 font-semibold rounded-full text-xs text-gray-800 ${
                      order.status === "Delivered"
                        ? "bg-green-200"
                        : order.status === "Shipped"
                        ? "bg-orange-200"
                        : order.status === "Processing"
                        ? "bg-purple-200"
                        : order.status === "Pending"
                        ? "bg-gray-200"
                        : "bg-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span>{order.date}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersTable;
