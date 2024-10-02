import { motion } from "framer-motion";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <motion.div
    className="fixed inset-y-0 left-0 w-64 bg-black text-white z-50"
    initial={{ x: "-100%" }}
    animate={{ x: isOpen ? 0 : "-100%" }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-4 flex justify-between items-center">
      <h2 className="text-lg">Menu</h2>
      <button onClick={toggleSidebar}>
        <X className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col gap-4 p-4">
      <a href="#what-we-believe">What we believe</a>
      <a href="#our-features">Our Features</a>
      <a href="#faqs">FAQs</a>
      <a href="#waitlist">The Waitlist</a>
    </div>
  </motion.div>
);
export default Sidebar;
