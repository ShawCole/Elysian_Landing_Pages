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
    const [version, setVersion] = React.useState<"v1" | "v2">("v1");

    // Sync version with URL parameter on mount and when it changes
    React.useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const v = searchParams.get("v");
        if (v === "v2") setVersion("v2");
        else setVersion("v1");
    }, [pathname]);

    const toggleVersion = (v: "v1" | "v2") => {
        setVersion(v);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("v", v);
        router.push(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-4 flex flex-col items-center gap-4">
            {/* Version Switcher */}
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-1 rounded-full shadow-2xl flex items-center gap-1">
                <button
                    onClick={() => toggleVersion("v1")}
                    className={cn(
                        "relative px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                        version === "v1" ? "text-black" : "text-zinc-500 hover:text-zinc-300"
                    )}
                >
                    {version === "v1" && (
                        <motion.div
                            layoutId="active-version"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">V1</span>
                </button>
                <button
                    onClick={() => toggleVersion("v2")}
                    className={cn(
                        "relative px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                        version === "v2" ? "text-black" : "text-zinc-500 hover:text-zinc-300"
                    )}
                >
                    {version === "v2" && (
                        <motion.div
                            layoutId="active-version"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">V2</span>
                </button>
            </div>

            {/* Avatar Switcher */}
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl flex items-center gap-1">
                {PAGES.map((page) => {
                    const isActive = pathname === page.path;
                    return (
                        <button
                            key={page.id}
                            onClick={() => {
                                const searchParams = new URLSearchParams(window.location.search);
                                searchParams.set("v", version);
                                router.push(`${page.path}?${searchParams.toString()}`);
                            }}
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
