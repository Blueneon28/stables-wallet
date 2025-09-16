import type { FC } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react";

type Transaction = {
  id: string;
  type: "send" | "receive";
  amount: number;
  address: string;
  timestamp: string;
  status: "completed" | "pending";
};

type TransactionItemProps = {
  transaction: Transaction;
  index: number;
};

export const TransactionItem: FC<TransactionItemProps> = ({
  transaction,
  index,
}) => {
  const { type, amount, address, timestamp, status } = transaction;

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="relative overflow-clip flex items-center justify-between p-4 rounded-2xl border border-purple-100/50 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm"
    >
      {type === "receive" && (
        <>
          <div className="-left-12 top-7 absolute w-24 h-24 bg-[#00A218] opacity-10 rounded-[6rem]" />
          <div className="-left-10 top-10 absolute w-20 h-20 bg-[#00A218] opacity-10 rounded-[6rem]" />
          <div className="-left-5 top-13 absolute w-12 h-12 bg-[#00A218] opacity-10 rounded-[6rem]" />
        </>
      )}
      <div className="flex items-center space-x-4">
        <motion.div
          className={`p-2 rounded-xl justify-center items-center gap-2.5 shadow-lg bg-[#1C1C1A] text-white`}
          whileHover={{
            scale: 1.1,
            rotate: type === "send" ? 5 : -5,
          }}
          transition={{ duration: 0.2 }}
        >
          {type === "send" ? (
            <ArrowUpRight className="w-6 h-6" />
          ) : (
            <ArrowDownLeft className="w-6 h-6" />
          )}
        </motion.div>

        <div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-black text-xs">
              {type === "send" ? "Sent to" : "Received from"}
            </span>
            {status === "pending" && (
              <motion.span
                className="px-3 py-1.5 text-xs bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full border border-orange-200 flex items-center space-x-1"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(251, 146, 60, 0.4)",
                    "0 0 0 4px rgba(251, 146, 60, 0.1)",
                    "0 0 0 0 rgba(251, 146, 60, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-3 h-3" />
                <span>Pending</span>
              </motion.span>
            )}
          </div>
          <div className="text-xs text-[#BABABA] mt-1">
            {formatAddress(address)} • {timestamp}
          </div>
        </div>
      </div>

      <div className="text-right">
        <motion.div
          className={`font-grotesk font-bold md:text-lg ${
            type === "send" ? "text-[#B60000]" : "text-[#006810]"
          }`}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {type === "send" ? "-" : "+"}${amount.toFixed(2)}
        </motion.div>
        <div className="text-xs font-semibold">USDC</div>
      </div>

      {type === "send" && (
        <>
          <div className="-right-12 bottom-7 absolute w-24 h-24 bg-[#B60000] opacity-10 rounded-[6rem]" />
          <div className="-right-10 bottom-10 absolute w-20 h-20 bg-[#B60000] opacity-10 rounded-[6rem]" />
          <div className="-right-5 bottom-13 absolute w-12 h-12 bg-[#B60000] opacity-10 rounded-[6rem]" />
        </>
      )}
    </motion.div>
  );
};
