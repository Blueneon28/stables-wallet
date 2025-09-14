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
      className="flex items-center justify-between p-5 bg-gradient-to-r from-white via-purple-50/30 to-white rounded-2xl border border-purple-100/50 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className={`p-3 rounded-2xl shadow-lg ${
            type === "send"
              ? "bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600"
              : "bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600"
          }`}
          whileHover={{
            scale: 1.1,
            rotate: type === "send" ? 5 : -5,
          }}
          transition={{ duration: 0.2 }}
        >
          {type === "send" ? (
            <ArrowUpRight className="w-5 h-5" />
          ) : (
            <ArrowDownLeft className="w-5 h-5" />
          )}
        </motion.div>

        <div>
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-gray-800">
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
          <div className="text-sm text-gray-600 font-medium mt-1">
            {formatAddress(address)} • {timestamp}
          </div>
        </div>
      </div>

      <div className="text-right">
        <motion.div
          className={`font-bold text-lg ${
            type === "send"
              ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
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
        <div className="text-sm font-medium">USDC</div>
      </div>
    </motion.div>
  );
};
