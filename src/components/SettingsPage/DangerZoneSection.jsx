import { motion } from "framer-motion";
import { Trash } from "lucide-react";
import Button from "../Button";

const DangerZoneSection = () => {
  return (
    <motion.div
      className="bg-red-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-red-700 lg:col-span-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Trash size={24} className="text-red-400" />
        <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
      </div>

      <p className="text-gray-300 mb-4">
        Permanently delete your account and all of your content.
      </p>

      <div className="space-y-6">
        <Button text="Delete Account" bg_color="bg-red" />
      </div>
    </motion.div>
  );
};

export default DangerZoneSection;
