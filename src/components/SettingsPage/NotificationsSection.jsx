import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch";

const NotificationsSection = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Bell size={24} className="text-indigo-400" />
        <h2 className="text-xl font-semibold text-gray-100">Notifications</h2>
      </div>

      <div className="flex flex-col gap-5">
        <ToggleSwitch
          label={"Push Notifications"}
          isOn={notifications.push}
          onToggle={() =>
            setNotifications({ ...notifications, push: !notifications.push })
          }
        />

        <ToggleSwitch
          label={"Email Notifications"}
          isOn={notifications.email}
          onToggle={() =>
            setNotifications({ ...notifications, email: !notifications.email })
          }
        />

        <ToggleSwitch
          label={"SMS Notifications"}
          isOn={notifications.sms}
          onToggle={() =>
            setNotifications({ ...notifications, sms: !notifications.sms })
          }
        />
      </div>
    </motion.div>
  );
};

export default NotificationsSection;
