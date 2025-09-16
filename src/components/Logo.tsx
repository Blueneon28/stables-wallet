import type { FC } from "react";
import { motion } from "motion/react";
import logo from "/stables-logo.png";

type LogoProps = {
  size?: number;
  className?: string;
};

export const Logo: FC<LogoProps> = ({
  // size = 48,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative`}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      <img src={logo} alt="stables-logo" className={className} />
    </motion.div>
  );
};
