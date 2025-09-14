import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function RainbowCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideTrail = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", hideTrail);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", hideTrail);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-20 blur-sm"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    />
  );
}

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-10 opacity-30"
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(600px circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(600px circle at 0% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(600px circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(600px circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
