import type { FC } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WalletIllustration } from "@/components/WalletIllustration";
import { BrandHero } from "./components/BrandHero";
import { FeatureHighlights } from "./components/FeatureHighlights";

type SplashProps = {
  onLogin: () => void;
};

export const Splash: FC<SplashProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 relative overflow-hidden flex flex-col items-center justify-center p-6">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-300/30 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 relative z-10"
      >
        <BrandHero />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="my-6"
        >
          <WalletIllustration />
        </motion.div>

        <FeatureHighlights />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-600 text-white rounded-2xl h-16 shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 text-lg font-semibold"
              size="lg"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ✨ Get Started ✨
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
