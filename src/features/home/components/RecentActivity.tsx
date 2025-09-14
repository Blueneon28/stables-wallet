import type { FC } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { TransactionItem } from "@/components/TransactionItem";

type RecentActivityProps = {
  showBalance: boolean;
};

export const RecentActivity: FC<RecentActivityProps> = () => {
  const transactions = [
    {
      id: "1",
      type: "receive" as const,
      amount: 150.0,
      address: "9Kx4vR2eP8nF1mL3qW5tY7sA6bD4cG8hJ2nM5pQ9rT",
      timestamp: "2h ago",
      status: "completed" as const,
    },
    {
      id: "2",
      type: "send" as const,
      amount: 75.5,
      address: "7Hx2wN9dK5mR8qL4tY6sA3bC5eF9gJ1nP4rT8vW2z",
      timestamp: "5h ago",
      status: "completed" as const,
    },
    {
      id: "3",
      type: "receive" as const,
      amount: 500.0,
      address: "5Jx8tQ3nK7mR2pL9wY4sA1bC6eF8gH5nP2rT4vW9z",
      timestamp: "1d ago",
      status: "completed" as const,
    },
    {
      id: "4",
      type: "send" as const,
      amount: 25.75,
      address: "3Fx6rP1nK9mR4qL2tY8sA5bC3eF7gJ9nP6rT1vW4z",
      timestamp: "2d ago",
      status: "pending" as const,
    },
    {
      id: "5",
      type: "receive" as const,
      amount: 1200.0,
      address: "1Dx4pN7nK3mR6qL8tY2sA9bC1eF5gJ7nP4rT6vW8z",
      timestamp: "3d ago",
      status: "completed" as const,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-8 mb-6 relative z-10"
    >
      <div className="flex items-center space-x-2 mb-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Recent Activity
        </h2>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 text-purple-500" />
        </motion.div>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};
