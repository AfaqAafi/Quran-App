import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const sidebarState = useSelector((store) => store.sidebar.toggleSidebar);
  // const router = useNavigate()
 
  const sidebarVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0, 
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <AnimatePresence>
      {sidebarState && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          className={`duration-100 w-72 absolute h-screen left-0 top-[70px] bottom-0 bg-[#2A2F4F] shadow-[rgba(17, 12, 46, 0.15) 0px 48px 100px 0px]`}
        >
          <div className="p-6">
            <h3 className="transition-all duration-300 mb-3 cursor-pointer hover:bg-gray-600 p-1 rounded-lg">
              <Link
                to="/about"
                className="text-white pl-2 text-[22px] font-medium"
              >
                About
              </Link>
            </h3>
            <h3 className="transition-all duration-300 mb-3 cursor-pointer hover:bg-gray-600 p-1 rounded-lg">
              <Link
                to="/reciter"
                className="text-white pl-2 text-[22px] font-medium"
              >
                Change Reciter
              </Link>
            </h3>
            <h3 className="transition-all duration-300 mb-3 cursor-pointer hover:bg-gray-600 p-1 rounded-lg">
              <Link
                to="/translator"
                className="text-white pl-2 text-[22px] font-medium"
              >
                Change Translation
              </Link>
            </h3>
            <h3 className="transition-all duration-300 mb-3 cursor-pointer hover:bg-gray-600 p-1 rounded-lg">
              <Link
                to="/feedback"
                className="text-white pl-2 text-[22px] font-medium"
              >
                Send FeedBack
              </Link>
            </h3>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
