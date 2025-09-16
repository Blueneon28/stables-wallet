import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <div className="relative ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between relative z-10 bg-[url(@/assets/bg-header.png)] rounded-b-3xl h-40"
      >
        <motion.div
          className="px-6 flex items-center space-x-3 my-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="rounded-lg bg-white w-8 h-8 items-center p-0.5">
            <Logo className="-top-1" />
          </div>
          <h1 className="text-xl font-grotesk font-bold text-center text-white bg-clip-text">
            Stables
          </h1>
        </motion.div>
      </motion.div>
      <div
        className={`absolute top-0 w-full bg-[url(@/assets/bg-header.png)] rounded-b-3xl h-40`}
      />
    </div>
  );
};
