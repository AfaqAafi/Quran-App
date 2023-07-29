import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { menus } from "../utils/constant";

const Sidebar = () => {
  const sidebarState = useSelector((store) => store.sidebar.toggleSidebar);

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
          className={`duration-100 w-64 z-20 absolute h-screen left-0 top-[70px] bottom-0 bg-[#0C134F] shadow-[rgba(17, 12, 46, 0.15) 0px 48px 100px 0px]`}
        >
          <div className="p-6">
            {menus.map((page) => (
              <h3
                key={page.id}
                className="transition-all duration-300 mb-3 cursor-pointer hover:bg-gray-600 p-1 rounded-lg"
              >
                <Link
                  to={page.url}
                  className="text-white pl-2 text-[22px] font-medium"
                >
                  {page.page}
                </Link>
              </h3>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
