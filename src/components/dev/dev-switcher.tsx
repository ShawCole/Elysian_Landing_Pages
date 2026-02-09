"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const PAGES = [
    { name: "Sophie", path: "/searching-sophie", id: "sophie" },
    { name: "Ava", path: "/strategic-ava", id: "ava" },
    { name: "Tristan", path: "/mobile-tristan", id: "tristan" },
    { name: "Aaron", path: "/roi-aaron", id: "aaron" },
];

export const DevSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();

    // Only show in development if needed, but for now we just show it
    // You can wrap this in if (process.env.NODE_ENV !== 'development') return null;

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-4">
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl flex items-center gap-1">
                {PAGES.map((page) => {
                    const isActive = pathname === page.path;
                    return (
                        <button
                            key={page.id}
                            onClick={() => router.push(page.path)}
                            className={cn(
                                "relative px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                                isActive ? "text-black" : "text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-primary rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{page.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
