import { motion } from "framer-motion";
const Card = ({ children, className, isLeft,isInView }) => (
  <motion.div
    className={`rounded-lg ${className}`}
    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (isLeft ? -100 : 100) }}
    transition={{ delay: 0.5, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.div>
);
export default Card;
