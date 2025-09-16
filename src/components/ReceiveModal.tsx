import { useEffect, useState, type FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowDownLeft,
  Copy,
  Check,
  Download,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ReceiveModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ReceiveModal: FC<ReceiveModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [qrLoading, setQrLoading] = useState(true);
  const walletAddress = "8H2uQsm8XJc9vKw3zF7dR5nG1pL4tY6sA9bC2eX7mN5q";

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(walletAddress);
      } else {
        const el = document.createElement("div");
        el.contentEditable = "true";
        el.innerHTML = walletAddress;
        document.body.appendChild(el);

        const range = document.createRange();
        range.selectNodeContents(el);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);

        document.execCommand("copy");
        document.body.removeChild(el);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleSaveQR = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const link = document.createElement("a");
      link.download = "wallet-qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    img.src = generateQRCodeUrl(walletAddress);
  };

  const generateQRCodeUrl = (address: string) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      address
    )}`;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setQrLoading(true);
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
            <div className="bg-white rounded-3xl w-full max-w-md p-8 space-y-6 backdrop-blur-sm relative overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="p-2 bg-[#C190D1] rounded-xl text-white"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <ArrowDownLeft className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-grotesk font-bold">
                      Receive USDC
                    </h2>
                    <p className="text-xs text-[#767676]">Get paid instantly</p>
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
                    <X className="w-5 h-5 text-black" />
                  </Button>
                </motion.div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative flex justify-center">
                  <div className="p-6 rounded-3xl border shadow-xl relative">
                    {qrLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl">
                        <Loader2 className="w-8 h-8 text-[#582EE8] animate-spin" />
                      </div>
                    )}
                    <img
                      src={generateQRCodeUrl(walletAddress)}
                      alt="Wallet QR Code"
                      className="w-48 h-48 mx-auto"
                      onLoad={() => setQrLoading(false)}
                      onError={() => setQrLoading(false)}
                    />
                    <Button
                      onClick={handleSaveQR}
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 text-[#582EE8] hover:text-[#582EE8] hover:bg-gray-100 rounded-xl"
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Wallet Address */}
                <div className="flex flex-col gap-1 items-center justify-center">
                  <p className="text-black font-bold flex items-center justify-center gap-1">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Your Secure Wallet Address</span>
                  </p>
                  <div className="relative">
                    <motion.div
                      key={copied ? "copied" : "default"}
                      initial={{ backgroundColor: "#EEEBFF" }}
                      animate={
                        copied
                          ? { backgroundColor: "#bbf7d0" }
                          : { backgroundColor: "#EEEBFF" }
                      }
                      transition={{ duration: 0.6 }}
                      className="rounded-lg p-4 pr-12 break-all items-center text-sm text-center text-[#582EE8]"
                    >
                      {walletAddress}
                    </motion.div>

                    <Button
                      onClick={handleCopy}
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#582EE8] hover:text-[#582EE8] hover:bg-white"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-1">
                  <strong className="flex-1 font-bold text-black">
                    <span>Security Note:</span>
                  </strong>
                  <p className="text-[#582EE8] font-medium text-sm">
                    Only send USDC to this address on the Solana network.
                    Sending other tokens may result in permanent loss.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
