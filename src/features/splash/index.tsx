import type { FC } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BrandHero } from "./components/BrandHero";
import { Sparkle } from "lucide-react";

type SplashProps = {
  onLogin: () => void;
};

export const Splash: FC<SplashProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 z-10"
      >
        <BrandHero />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onLogin}
              className="w-full bg-[#1C1C1A] font-grotesk hover:bg-gray-600 text-white rounded-full h-16 transition-all duration-300 text-lg font-bold"
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
                className="flex items-center justify-center gap-2 px-6 py-5"
              >
                Get Started
                <Sparkle className="text-white" fill="white" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
