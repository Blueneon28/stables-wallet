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
        className="flex flex-col items-center space-y-4 relative"
      >
        <Logo size={80} />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent">
            Stables
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-800 rounded-full mt-2"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-gray-700 text-lg max-w-sm mx-auto leading-relaxed">
          Your <span className="font-semibold text-purple-600">magical</span>{" "}
          stablecoin wallet. Send, receive, and manage USDC with{" "}
          <span className="font-semibold text-fuchsia-600">delight</span>.
        </p>
      </motion.div>
    </>
  );
};
