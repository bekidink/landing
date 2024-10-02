import { motion } from 'framer-motion';
const Button = ({ children, className }) => (
    <motion.button
      className={`bg-white text-black font-semibold py-2 px-4 rounded-full ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );

  export default Button