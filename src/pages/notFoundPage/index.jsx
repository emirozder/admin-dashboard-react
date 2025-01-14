import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 justify-center items-center h-screen overflow-auto relative z-10 font-bold text-4xl text-gray-300">
      <AlertTriangle className="w-16 h-16 mr-4" />
      Page Not Found!
    </div>
  );
};

export default NotFoundPage;
