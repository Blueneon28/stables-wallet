import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

export const BrandHero = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="flex flex-col items-center gap-6"
      >
        <Logo className="h-80" />
        <h1 className="text-4xl font-grotesk font-bold bg-gradient-to-r from-[#B8A2FF] via-[#6A3FFF] to-black bg-clip-text text-transparent">
          Stables
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-20 w-full"
      >
        <p className="text-black max-w-sm mx-auto leading-relaxed font-bold">
          Ready to stable for your everyday payments?
        </p>
      </motion.div>
    </>
  );
};
