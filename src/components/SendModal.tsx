import { useEffect, useState, type FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Sparkle } from "lucide-react";
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 gap-4"
          >
            <div className="bg-white rounded-3xl w-full max-w-md p-8 space-y-6 relative overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="p-2 bg-[#C190D1] rounded-xl text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-grotesk font-bold">
                      Send USDC
                    </h2>
                    <p className="text-xs text-[#767676]">
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
                    className="p-2 h-auto rounded-xl hover:bg-gray-200"
                  >
                    <X className="w-6 h-6 text-black" />
                  </Button>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-start gap-1.5 self-stretch"
                >
                  <Label
                    htmlFor="recipient"
                    className="text-black font-bold flex items-center space-x-1"
                  >
                    <span>Recipient Address</span>
                  </Label>
                  <Input
                    id="recipient"
                    placeholder="9Kx4...Q9rT "
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="rounded-lg px-4 py-2 bg-white shadow placeholder:text-[#BABABA] text-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-start gap-1.5 self-stretch"
                >
                  <Label htmlFor="amount" className="text-black font-bold">
                    <span>Amount (USDC)</span>
                  </Label>
                  <div className="relative w-full">
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pr-20 px-4 py-2 rounded-lg bg-white shadow placeholder:text-[#BABABA] text-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-black">
                      USDC
                    </div>
                  </div>
                  <div className="text-sm text-[#595959] font-semibold">
                    Balance:{" "}
                    <span className="text-[#582EE8] text-base font-grotesk font-bold">
                      ${MAIN_WALLET_BALANCE.toFixed(2)}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col rounded-3xl p-4 gap-4 border"
                >
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-[#595959]">Amount</span>
                    <span className="text-[#582EE8] text-base font-bold">
                      ${amount || "0.00"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-[#595959]">Network Fee</span>
                    <span className="text-[#582EE8] text-base font-bold">
                      $0.01
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span className="text-black text-sm">Total</span>
                    <span className="text-[#582EE8] text-base">
                      ${(parseFloat(amount || "0") + 0.01).toFixed(2)}
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  onClick={handleSend}
                  disabled={!isValidAmount || !isValidRecipient || isConfirming}
                  className="w-full bg-[#1C1C1A] hover:bg-gray-600 text-white rounded-full px-6 py-4 h-14 transition-all duration-300 text-lg font-semibold"
                >
                  {isConfirming ? (
                    <div className="flex items-center gap-1">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <ArrowUpRight className="w-6 h-6" />
                      <span className="font-grotesk">Send</span>
                      <Sparkle className="w-6 h-6" fill="white" />
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
