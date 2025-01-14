import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { USERS_TABLE_DATA } from "../../../utils/consts";

const UsersTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [Users, setUsers] = useState(USERS_TABLE_DATA);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filteredUsers = USERS_TABLE_DATA.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    );
    setUsers(filteredUsers);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col justify-between items-center mb-6 sm:flex-row">
        <h2 className="text-xl font-semibold text-gray-100">Users List</h2>
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
              {["", "Name", "Email", "Role", "Status", "Actions"].map(
                (item, index) => (
                  <th
                    key={index}
                    className={`text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                      index !== 0 ? "px-6 py-3" : "w-16"
                    }`}
                  >
                    {item}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {Users.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="flex justify-center py-4 text-sm font-medium text-gray-100 ">
                  <div className="flex justify-center items-center size-10 rounded-full font-bold bg-gradient-to-r from-purple-400 to-pink-400">
                    {user.name[0]}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">
                  <span>{user.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span>{user.email}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex leading-5 font-semibold rounded-full text-xs text-gray-300 bg-blue-800">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex leading-5 font-semibold rounded-full text-xs text-gray-300 ${
                      user.status === "Active" ? "bg-green-800" : "bg-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
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

export default UsersTable;
