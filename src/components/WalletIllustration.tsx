import { motion } from "motion/react";

export const WalletIllustration = () => {
  return (
    <div className="relative w-32 h-24 mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-900 rounded-xl shadow-lg"
      />

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-2 left-2 w-6 h-4 bg-white/20 rounded"
      />

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full"
      />

      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0, scale: 0 }}
          animate={{
            y: [20, -10, 20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3 + 0.5,
            ease: "easeInOut",
          }}
          className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-md"
          style={{
            left: `${30 + i * 20}%`,
            top: "60%",
          }}
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4 + 1,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-white"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      ))}
    </div>
  );
};
