import { useState, type FC } from "react";
import { motion } from "motion/react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecentActivity } from "./components/RecentActivity";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";

type HomeProps = {
  onSend: () => void;
  onReceive: () => void;
};

export const Home: FC<HomeProps> = ({ onSend, onReceive }) => {
  const [showBalance, setShowBalance] = useState(true);

  const handleShowBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
      <Header />

      <Balance onClickHide={handleShowBalance} showBalance={showBalance} />

      {/* Actions */}
      <div className="flex space-x-4 my-8">
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -4,
            rotateY: 5,
          }}
          whileTap={{ scale: 0.95 }}
          className="flex-1"
        >
          <Button
            onClick={onSend}
            className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-600 text-white rounded-2xl h-16 shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 text-lg font-semibold"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mr-3"
            >
              <ArrowUpRight className="w-6 h-6" />
            </motion.div>
            Send
            <motion.div
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="ml-2 w-2 h-2 bg-white rounded-full"
            />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            y: -4,
            rotateY: -5,
          }}
          whileTap={{ scale: 0.95 }}
          className="flex-1"
        >
          <Button
            onClick={onReceive}
            className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white rounded-2xl h-16 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 text-lg font-semibold"
          >
            <motion.div
              animate={{
                y: [0, -3, 3, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mr-3"
            >
              <ArrowDownLeft className="w-6 h-6" />
            </motion.div>
            Receive
            <motion.div
              animate={{
                scale: [0, 1, 0],
                rotate: [0, -180, -360],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="ml-2 w-2 h-2 bg-white rounded-full"
            />
          </Button>
        </motion.div>
      </div>

      <RecentActivity showBalance={showBalance} />
    </div>
  );
};
