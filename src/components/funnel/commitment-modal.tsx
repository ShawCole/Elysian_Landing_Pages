"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface CommitmentModalProps {
    onCommit: () => void;
    isOpen: boolean;
}

export const CommitmentModal = ({ onCommit, isOpen }: CommitmentModalProps) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!hasMounted || !isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            >
                {/* Backdrop with extreme blur */}
                <motion.div
                    className="absolute inset-0 bg-zinc-950/60 backdrop-blur-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden"
                >
                    {/* subtle aurora effect inside modal */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full" />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full" />

                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <Lock className="w-8 h-8 text-blue-400" />
                        </div>

                        <h2 className="text-3xl font-serif text-white mb-4">
                            Access Restricted to Committed Professionals.
                        </h2>

                        <p className="text-zinc-400 font-sans text-lg mb-8 leading-relaxed">
                            The proprietary distribution logic revealed in this masterclass is for high-authority individuals ready to transition into architectural ownership.
                        </p>

                        <div className="w-full space-y-4">
                            <button
                                onClick={onCommit}
                                className="w-full py-4 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                <ShieldCheck className="w-5 h-5" />
                                YES, I COMMIT
                            </button>
                            <p className="text-zinc-600 text-xs font-sans">
                                By clicking, you agree to treat the following data with executive confidentiality.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
