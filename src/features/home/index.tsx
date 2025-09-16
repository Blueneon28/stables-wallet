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
    <div className="min-h-screen bg-white relative">
      <Header />
      <div className="absolute min-h-screen w-full top-15 px-6 py-2 z-20">
        <Balance onClickHide={handleShowBalance} showBalance={showBalance} />

        {/* Actions */}
        <div className="flex space-x-4 my-6">
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full justify-between"
          >
            <Button
              onClick={onSend}
              className="flex-1 w-full bg-[#1C1C1A] hover:bg-gray-600 text-white text-xl font-bold font-grotesk rounded-full py-4 px-6 h-16 gap-2 transition-all duration-300"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
              <span className="">Send</span>
              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-2 h-2 bg-white rounded-full"
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
            className="w-full justify-between"
          >
            <Button
              onClick={onReceive}
              className="flex-1 w-full bg-[#1C1C1A] hover:bg-gray-600 text-white text-xl font-bold font-grotesk gap-2 rounded-full py-4 px-6 h-16 transition-all duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -3, 3, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
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
                className="w-2 h-2 bg-white rounded-full"
              />
            </Button>
          </motion.div>
        </div>

        <RecentActivity showBalance={showBalance} />
      </div>
    </div>
  );
};
