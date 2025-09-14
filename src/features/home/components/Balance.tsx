import type { FC } from "react";
import { motion } from "motion/react";
import { Eye, EyeClosed } from "lucide-react";
import UsdcLogo from "@/assets/usdc-logo.svg";
import { Button } from "@/components/ui/button";
import { MAIN_WALLET_BALANCE } from "@/constants";

type BalanceProps = {
  onClickHide: React.MouseEventHandler<HTMLButtonElement>;
  showBalance: boolean;
};

export const Balance: FC<BalanceProps> = ({ onClickHide, showBalance }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-900 rounded-2xl p-6 text-white shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-pink-100 text-sm">Total Balance</p>
          <div className="flex items-center space-x-2">
            {showBalance ? (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold"
              >
                ${MAIN_WALLET_BALANCE.toFixed(2)}
              </motion.h2>
            ) : (
              <div className="text-3xl font-bold">••••••</div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClickHide}
              className="hover:bg-transparent md:hover:bg-white/10 p-1"
            >
              {!showBalance ? (
                <EyeClosed className="w-4 h-4 text-white" />
              ) : (
                <Eye className="w-4 h-4 text-white" />
              )}
            </Button>
          </div>
        </div>
        <div className="text-right relative">
          <motion.div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full flex items-center justify-center relative z-10">
            <img src={UsdcLogo} alt="usdc-logo" />
          </motion.div>
        </div>
      </div>

      {/* Price indicator */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-pink-100">
          ≈ ${MAIN_WALLET_BALANCE.toFixed(2)} USD
        </span>
        <span className="text-purple-300">+0.01% (24h)</span>
      </div>
    </motion.div>
  );
};
