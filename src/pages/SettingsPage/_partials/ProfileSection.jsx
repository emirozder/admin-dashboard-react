import { motion } from "framer-motion";
import { User } from "lucide-react";
import Button from "../../../components/Button";

const ProfileSection = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <User size={24} className="text-indigo-400" />
        <h2 className="text-xl font-semibold text-gray-100">Profile</h2>
      </div>

      <div className="flex flex-col items-center gap-6 mb-6 sm:flex-row">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*fq7yCXh15o8__aUBkFFVPw.jpeg"
          alt="user img"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-1">
            Jimmy McGill
          </h3>
          <p className=" text-gray-400">slippingjimmy@example.com</p>
        </div>
      </div>

      <Button text="Edit Profile" />
    </motion.div>
  );
};

export default ProfileSection;
