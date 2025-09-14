import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between py-6 pt-0 relative z-10"
    >
      <motion.div
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.02 }}
      >
        <Logo className="w-12 h-12" />
        <h1 className="text-xl font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Stables
        </h1>
      </motion.div>
    </motion.div>
  );
};
