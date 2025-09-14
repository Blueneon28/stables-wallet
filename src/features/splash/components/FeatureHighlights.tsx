import { motion } from "motion/react";

export const FeatureHighlights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="grid grid-cols-3 gap-4 text-center"
    >
      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-12 h-12 mx-auto bg-pink-100 rounded-full flex items-center justify-center"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl">🚀</span>
        </motion.div>
        <p className="text-sm text-gray-600">Fast</p>
      </motion.div>
      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl">🔒</span>
        </motion.div>
        <p className="text-sm text-gray-600">Secure</p>
      </motion.div>
      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl">✨</span>
        </motion.div>
        <p className="text-sm text-gray-600">Simple</p>
      </motion.div>
    </motion.div>
  );
};
