/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { createRootRoute } from "@tanstack/react-router";
import {
  LiquidBackground,
  RainbowCursor,
} from "@/components/DelightfulElements";
import { SendModal } from "@/components/SendModal";
import { ReceiveModal } from "@/components/ReceiveModal";
import { Home } from "@/features/home";
import { Splash } from "@/features/splash";

export const Route = createRootRoute({
  component: () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSendModal, setShowSendModal] = useState(false);
    const [showReceiveModal, setShowReceiveModal] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const handleSend = () => {
      setShowSendModal(true);
    };

    const handleReceive = () => {
      setShowReceiveModal(true);
    };

    return (
      <div className="size-full relative">
        <LiquidBackground />
        <RainbowCursor />

        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            <motion.div
              key="splash"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            >
              <Splash onLogin={handleLogin} />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: 15 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            >
              <Home onSend={handleSend} onReceive={handleReceive} />
            </motion.div>
          )}
        </AnimatePresence>

        <SendModal
          isOpen={showSendModal}
          onClose={() => setShowSendModal(false)}
        />

        <ReceiveModal
          isOpen={showReceiveModal}
          onClose={() => setShowReceiveModal(false)}
        />
      </div>
    );
  },
});
