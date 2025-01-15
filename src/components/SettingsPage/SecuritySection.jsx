import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useState } from "react";
import Button from "../Button";
import ToggleSwitch from "../ToggleSwitch";

const SecuritySection = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Lock size={24} className="text-indigo-400" />
        <h2 className="text-xl font-semibold text-gray-100">Security</h2>
      </div>

      <div className="space-y-6">
        <ToggleSwitch
          label={"Two-Factor Authentication"}
          isOn={twoFactor}
          onToggle={() => setTwoFactor(!twoFactor)}
        />

        <Button text="Change Password" />
      </div>
    </motion.div>
  );
};

export default SecuritySection;
