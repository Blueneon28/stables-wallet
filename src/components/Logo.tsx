import { motion } from "motion/react";
import type { FC } from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

export const Logo: FC<LogoProps> = ({ size = 48, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f26eee" />
            <stop offset="50%" stopColor="#977dff" />
            <stop offset="100%" stopColor="#00033d" />
          </linearGradient>
        </defs>

        <circle
          cx="24"
          cy="24"
          r="22"
          fill="url(#logoGradient)"
          className="drop-shadow-lg"
        />

        <path
          d="M16 16C16 14.5 17.5 13 19 13H29C30.5 13 32 14.5 32 16C32 17.5 30.5 19 29 19H19C17.5 19 16 20.5 16 22C16 23.5 17.5 25 19 25H29C32.5 25 35 27.5 35 31C35 34.5 32.5 37 29 37H19C15.5 37 13 34.5 13 31"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        <circle cx="36" cy="12" r="2" fill="white" opacity="0.8" />
        <circle cx="12" cy="36" r="2" fill="white" opacity="0.8" />
      </svg>
    </motion.div>
  );
};
