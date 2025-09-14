import { useEffect, useState, type FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowDownLeft,
  Copy,
  Check,
  Shield,
  Download,
  Loader2,
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
            className="fixed inset-0 bg-gradient-to-br from-black/60 via-emerald-900/20 to-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-white via-emerald-50/50 to-green-50/50 rounded-3xl shadow-2xl shadow-emerald-500/20 w-full max-w-md p-8 space-y-6 border border-emerald-100/50 backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <ArrowDownLeft className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      Receive USDC
                    </h2>
                    <p className="text-sm text-gray-600">Get paid instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-2 h-auto rounded-xl hover:bg-emerald-100"
                >
                  <X className="w-5 h-5 text-emerald-600" />
                </Button>
              </div>

              <div className="text-center space-y-6">
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-3xl border-2 border-emerald-200 shadow-xl shadow-emerald-500/10 relative">
                    {qrLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/70 rounded-2xl">
                        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
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
                      className="absolute bottom-2 right-2 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100 rounded-xl"
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Wallet Address */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 font-semibold flex items-center justify-center space-x-1">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>Your Secure Wallet Address</span>
                  </p>
                  <div className="relative">
                    <motion.div
                      key={copied ? "copied" : "default"}
                      initial={{ backgroundColor: "#ecfdf5" }}
                      animate={
                        copied
                          ? { backgroundColor: "#bbf7d0" }
                          : { backgroundColor: "#ecfdf5" }
                      }
                      transition={{ duration: 0.6 }}
                      className="rounded-2xl p-4 pr-12 break-all text-sm font-mono text-emerald-800 border border-emerald-200"
                    >
                      {walletAddress}
                    </motion.div>

                    <Button
                      onClick={handleCopy}
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 text-left border border-blue-200">
                  <p className="text-sm text-blue-700 font-medium">
                    <strong className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>Security Note:</span>
                    </strong>
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
