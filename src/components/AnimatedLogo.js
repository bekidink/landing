import {motion} from "framer-motion"
const AnimatedLogo = ({ onClick, isExpanded }) => {
    return (
      <motion.img
        src="/path-to-fluid-ai-logo.png"
        alt="Fluid AI"
        className="w-24 mx-auto mb-4 cursor-pointer"
        animate={isExpanded ? {
          x: [0, 10, 0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        } : {
          x: 0,
          rotate: 0,
          scale: 1.2,
        }}
        transition={{
          duration: isExpanded ? 5 : 0.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: isExpanded ? Infinity : 0,
        }}
        onClick={onClick}
      />
    );
  };
  export default AnimatedLogo