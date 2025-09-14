import { useEffect, useState, type FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MAIN_WALLET_BALANCE } from "@/constants";

type SendModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SendModal: FC<SendModalProps> = ({ isOpen, onClose }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSend = () => {
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      setRecipient("");
      setAmount("");
      onClose();
    }, 2000);
  };

  const isValidAmount =
    amount &&
    parseFloat(amount) > 0 &&
    parseFloat(amount) <= MAIN_WALLET_BALANCE;
  const isValidRecipient = recipient.length > 10;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-white via-rose-50/50 to-pink-50/50 rounded-3xl shadow-2xl shadow-pink-500/20 w-full max-w-md p-8 space-y-6 border border-pink-100/50 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative background elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full blur-2xl"
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                      Send USDC
                    </h2>
                    <p className="text-sm text-gray-600">
                      Transfer funds securely
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="p-2 h-auto rounded-xl hover:bg-rose-100"
                  >
                    <X className="w-5 h-5 text-rose-600" />
                  </Button>
                </motion.div>
              </div>

              {/* <SendIllustration /> */}

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label
                    htmlFor="recipient"
                    className="text-gray-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Recipient Address</span>
                    <Sparkles className="w-3 h-3 text-purple-500" />
                  </Label>
                  <Input
                    id="recipient"
                    placeholder="8H2uQsm8XJc9..."
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="mt-2 rounded-xl border-purple-200 focus:border-pink-400 focus:ring-pink-400/20 bg-white/80 backdrop-blur-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label
                    htmlFor="amount"
                    className="text-gray-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Amount (USDC)</span>
                    <Zap className="w-3 h-3 text-yellow-500" />
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pr-20 rounded-xl border-purple-200 focus:border-pink-400 focus:ring-pink-400/20 bg-white/80 backdrop-blur-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-purple-600">
                      USDC
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 font-medium">
                    Balance:{" "}
                    <span className="text-purple-600">
                      ${MAIN_WALLET_BALANCE.toFixed(2)} USDC
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 space-y-3 border border-purple-100"
                >
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-700">Amount</span>
                    <span className="text-purple-600">${amount || "0.00"}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-700">Network Fee</span>
                    <span className="text-purple-600">$0.01</span>
                  </div>
                  <div className="border-t border-purple-200 pt-3 flex justify-between font-bold text-lg">
                    <span className="text-gray-800">Total</span>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${(parseFloat(amount || "0") + 0.01).toFixed(2)}
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleSend}
                  disabled={!isValidAmount || !isValidRecipient || isConfirming}
                  className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-600 text-white rounded-2xl h-14 shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 text-lg font-semibold"
                >
                  {isConfirming ? (
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending Magic...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Send USDC</span>
                      <Sparkles className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
