import type { FC } from "react";
import { motion } from "motion/react";
import { Eye, EyeClosed } from "lucide-react";
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
      className="relative w-full bg-gradient-to-br to-[#AC92FF] from-[#F5F2FF] rounded-3xl px-6 py-9 gap-1 self-stretch text-black overflow-hidden z-1"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-bold">Total Balance</p>
          <div className="flex font-grotesk items-center space-x-2">
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
                <EyeClosed className="w-4 h-4 text-black" />
              ) : (
                <Eye className="w-4 h-4 text-black" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Price indicator */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-black">
          ≈ ${MAIN_WALLET_BALANCE.toFixed(2)} USD
        </span>
        <div className="flex text-xs justify-center items-center rounded-2xl px-2 py-0.5 bg-[#6200FF] shadow z-20">
          <span className="text-white">+0.01% (24h)</span>
        </div>
      </div>

      <>
        <div className="absolute -right-56 -top-6 w-96 h-96 rounded-full opacity-30 bg-white" />
        <div className="absolute -right-44 top-6 w-72 h-72 rounded-full opacity-30 bg-white" />
        <div className="absolute -right-28 top-20 w-44 h-44 rounded-full opacity-30 bg-white" />
      </>
    </motion.div>
  );
};
