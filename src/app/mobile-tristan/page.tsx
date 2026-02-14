"use client";

import { AuroraBackground } from "@/components/magicui/aurora-background";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, Globe, MapPin, Plane, CreditCard } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";

function MobileTristanContent() {
    const searchParams = useSearchParams();
    const version = searchParams.get("v") || "v1";

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <div className={cn(
            "min-h-screen selection:bg-primary/30",
            version === "v2" ? "bg-white text-v2-navy font-sans" : "bg-black text-zinc-100 font-sans"
        )}>

            {/* GHL Hidden Fields / UTM Tracker */}
            <form id="ghl-tracking" className="hidden">
                <input type="hidden" name="avatar_id" value="tristan" />
            </form>

            <AuroraBackground
                className={cn(
                    "px-4 py-8 md:py-0",
                    version === "v2" ? "dark:bg-white bg-white" : ""
                )}
                showRadialGradient={version !== "v2"}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 md:pt-12"
                >
                    {/* LEFT: The Tristan Mechanism */}
                    <div className="lg:col-span-7 flex flex-col gap-8 pb-32">
                        <div className="min-h-[320px] flex flex-col justify-center gap-8">
                            <motion.div variants={itemVariants} className={cn(
                                "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase w-fit",
                                version === "v2"
                                    ? "bg-v2-turquoise/10 border-v2-turquoise/20 text-v2-turquoise"
                                    : "bg-primary/10 border-primary/20 text-primary"
                            )}>
                                <Globe className="w-3.5 h-3.5" />
                                <span>{version === "v2" ? "Location Independent Logic" : "Location-Independent Engine"}</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className={cn(
                                    "text-5xl md:text-7xl lg:text-[75px] leading-[1] tracking-tight",
                                    version === "v2" ? "font-serif text-v2-navy" : "font-serif text-zinc-50"
                                )}
                            >
                                {version === "v2" ? (
                                    <>Live <span className="text-v2-gold italic">everywhere</span>. <br />Build <span className="text-v2-turquoise">anywhere</span>.</>
                                ) : (
                                    <>The <span className="italic text-primary">Credible</span> Mechanism for Global Revenue.</>
                                )}
                            </motion.h1>

                            <motion.p variants={itemVariants} className={cn(
                                "text-lg md:text-xl max-w-xl leading-relaxed",
                                version === "v2" ? "text-v2-charcoal" : "text-zinc-400"
                            )}>
                                {version === "v2"
                                    ? "A credible mechanism for global revenue, designed for professionals who require a lifestyle that travels with them."
                                    : "Transitioning from location-bound employment to a mobile distribution engine. The 2026 roadmap for professionals who require a lifestyle that travels with them."}
                            </motion.p>

                            {/* Trust Stack: Global Network & Financial Access */}
                            <motion.div variants={itemVariants} className={cn(
                                "grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y",
                                version === "v2" ? "border-v2-navy/5" : "border-white/5"
                            )}>
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "p-2 rounded-lg border",
                                        version === "v2" ? "bg-v2-cream border-v2-navy/10" : "bg-white/5 border-white/10"
                                    )}>
                                        <MapPin className={cn("w-4 h-4", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={cn("text-[10px] font-bold uppercase tracking-widest", version === "v2" ? "text-v2-navy/60" : "text-zinc-500")}>Global Network</span>
                                        <span className={cn("text-sm font-semibold", version === "v2" ? "text-v2-navy" : "text-zinc-100")}>Active in 40+ Countries</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "p-2 rounded-lg border",
                                        version === "v2" ? "bg-v2-cream border-v2-navy/10" : "bg-white/5 border-white/10"
                                    )}>
                                        <CreditCard className={cn("w-4 h-4", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={cn("text-[10px] font-bold uppercase tracking-widest", version === "v2" ? "text-v2-navy/60" : "text-zinc-500")}>Financial Access</span>
                                        <span className={cn("text-sm font-semibold", version === "v2" ? "text-v2-navy" : "text-zinc-100")}>Verified Credit Access</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className={cn(
                            "relative group aspect-video w-full max-w-2xl rounded-2xl overflow-hidden border bg-zinc-900/50 backdrop-blur-md",
                            version === "v2" ? "border-v2-navy/10" : "border-white/10"
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1449156006002-3f62f8e9197c?auto=format&fit=crop&q=80&w=1200"
                                alt="High-End Urban Mobility"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className={cn("text-xs font-bold mb-1 uppercase tracking-widest", version === "v2" ? "text-v2-turquoise" : "text-primary")}>
                                    {version === "v2" ? "Global Access" : "The Tristan Framework"}
                                </p>
                                <p className={cn("text-lg font-serif", version === "v2" ? "text-white" : "text-zinc-50")}>
                                    {version === "v2" ? "Worldwide Revenue. Zero Boundaries." : "Why a \"Vehicle\" Beats a \"Job\" for Global Travel"}
                                </p>
                            </div>
                            <div className="relative z-20 h-full flex items-center justify-center">
                                <button className={cn(
                                    "w-16 h-16 rounded-full backdrop-blur-md border flex items-center justify-center transition-all",
                                    version === "v2"
                                        ? "bg-v2-turquoise/20 border-v2-turquoise/30 text-white hover:bg-v2-turquoise hover:text-white"
                                        : "bg-white/10 border-white/20 text-white hover:bg-primary hover:text-black"
                                )}>
                                    <Plane className="w-6 h-6" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Mobility Command Center */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 relative lg:sticky lg:top-24"
                    >
                        <div className={cn(
                            "absolute -inset-1 blur-2xl opacity-50",
                            version === "v2" ? "bg-v2-turquoise/20" : "bg-primary/20"
                        )} />
                        <SpotlightCard className={cn(
                            "relative backdrop-blur-3xl p-8 md:p-10 rounded-3xl shadow-2xl",
                            version === "v2" ? "bg-white/80 border-v2-navy/5" : "bg-zinc-900/40 border-white/10"
                        )}>
                            <h2 className={cn("text-2xl font-serif mb-6", version === "v2" ? "text-v2-navy" : "text-white")}>
                                {version === "v2" ? "Mobility Strategy Audit" : "Mobility Audit Interface"}
                            </h2>
                            <p className={cn("text-sm mb-8", version === "v2" ? "text-v2-charcoal" : "text-zinc-400")}>
                                {version === "v2" ? "Evaluate the possibility of a location-independent future." : "Evaluate the feasibility of decoupling your logic from physical infrastructure."}
                            </p>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className={cn("text-[10px] uppercase tracking-widest font-bold ml-1", version === "v2" ? "text-v2-navy/60" : "text-zinc-500")}>Full Name</label>
                                    <input type="text" placeholder="Your Name" className={cn(
                                        "w-full border rounded-xl px-4 py-4 text-sm focus:outline-none transition-colors",
                                        version === "v2"
                                            ? "bg-v2-cream/50 border-v2-navy/10 text-v2-navy focus:border-v2-turquoise/50"
                                            : "bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-primary/50"
                                    )} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className={cn("text-[10px] uppercase tracking-widest font-bold ml-1", version === "v2" ? "text-v2-navy/60" : "text-zinc-500")}>Email Address</label>
                                    <input type="email" placeholder="Your Email" className={cn(
                                        "w-full border rounded-xl px-4 py-4 text-sm focus:outline-none transition-colors",
                                        version === "v2"
                                            ? "bg-v2-cream/50 border-v2-navy/10 text-v2-navy focus:border-v2-turquoise/50"
                                            : "bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-primary/50"
                                    )} />
                                </div>

                                <button className={cn(
                                    "w-full mt-6 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden",
                                    version === "v2"
                                        ? "bg-v2-turquoise text-white hover:shadow-[0_0_30px_rgba(64,224,208,0.3)] shadow-lg"
                                        : "bg-primary text-black hover:shadow-[0_0_30px_rgba(243,229,202,0.3)] shadow-lg"
                                )}>
                                    <span className="relative z-10 flex items-center gap-2 uppercase tracking-tight text-xs font-bold leading-none">
                                        {version === "v2" ? "Unlock Roadmap & Access" : "DOWNLOAD 100K ROADMAP & ACCESS"}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </button>

                                <p className={cn("text-[10px] text-center mt-4 px-6 uppercase tracking-widest", version === "v2" ? "text-v2-charcoal/60" : "text-zinc-600")}>
                                    {version === "v2" ? "No hype. Just global mobility." : "Secure Data Transmission Protocol Active."}
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </AuroraBackground>

            {/* Mechanism & Mobility Section */}
            <section className={cn(
                "py-32 px-4 relative",
                version === "v2" ? "bg-v2-cream" : "bg-black"
            )}>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <span className={cn("font-bold text-xs tracking-widest uppercase", version === "v2" ? "text-v2-turquoise" : "text-primary")}>
                            {version === "v2" ? "Global Freedom" : "The Mobile Mechanism"}
                        </span>
                        <h2 className={cn("text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight", version === "v2" ? "text-v2-navy" : "text-white")}>
                            {version === "v2" ? (
                                <>Revenue without <br /><span className="text-v2-gold italic">boundaries.</span></>
                            ) : (
                                <>Decoupling Revenue <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">From Local Constraints.</span></>
                            )}
                        </h2>
                        <div className={cn("space-y-6 text-lg leading-relaxed", version === "v2" ? "text-v2-charcoal" : "text-zinc-400")}>
                            <p>
                                {version === "v2"
                                    ? "Traditional careers are anchored to one place. In 2026, wealth should be as mobile as you are."
                                    : "Professional stagnation is often geographical. Traditional career architecture requires a physical tether to a specific market or time zone."}
                            </p>
                            <p>
                                {version === "v2"
                                    ? "Transition toward a location-independent distribution engine that works wherever you do."
                                    : "The transition toward Location-Independent Distribution replaces office-bound input with a global engine that operates regardless of your current coordinates."}
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <SpotlightCard className={cn(
                            "p-10 rounded-3xl transition-colors group",
                            version === "v2" ? "bg-white border-v2-navy/5 hover:border-v2-turquoise/30" : "bg-zinc-900/30 border-white/5 hover:border-primary/20"
                        )}>
                            <Globe className={cn("w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                            <h3 className={cn("text-2xl font-serif mb-4", version === "v2" ? "text-v2-navy" : "text-zinc-100")}>
                                {version === "v2" ? "Infinite Reach" : "Global Distribution Engine"}
                            </h3>
                            <p className={cn("leading-relaxed font-sans text-base", version === "v2" ? "text-v2-charcoal" : "text-zinc-500")}>
                                {version === "v2"
                                    ? "Scale your logic across 40+ countries without the ceiling of local economies."
                                    : "Operating within a framework that scales across 40+ countries, removing the ceiling of localized economies."}
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className={cn(
                            "p-10 rounded-3xl transition-colors group",
                            version === "v2" ? "bg-white border-v2-navy/5 hover:border-v2-turquoise/30" : "bg-zinc-900/30 border-white/5 hover:border-primary/20"
                        )}>
                            <Plane className={cn("w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                            <h3 className={cn("text-2xl font-serif mb-4", version === "v2" ? "text-v2-navy" : "text-zinc-100")}>
                                {version === "v2" ? "Lifestyle First" : "Logistics-Free Scaling"}
                            </h3>
                            <p className={cn("leading-relaxed font-sans text-base", version === "v2" ? "text-v2-charcoal" : "text-zinc-500")}>
                                {version === "v2"
                                    ? "Focus on high-level logic without the burden of physical inventory or local management."
                                    : "Focusing pure logic on revenue distribution without the friction of physical inventory or localized management."}
                            </p>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* Global Footer (Compliance) */}
            <footer className={cn(
                "py-20 px-4 border-t",
                version === "v2" ? "bg-white border-v2-navy/5" : "bg-black border-white/5"
            )}>
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <Logo version={version === "v2" ? "v2" : "v1"} />
                    <div className={cn("font-serif text-2xl mb-8 tracking-tighter", version === "v2" ? "text-v2-navy" : "text-white")}>
                        Elysian<span className={cn("tracking-normal ml-0.5", version === "v2" ? "text-v2-turquoise" : "text-primary")}>Leaders</span>
                    </div>

                    <div className={cn(
                        "flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-xs uppercase tracking-widest font-bold",
                        version === "v2" ? "text-v2-navy/40" : "text-zinc-500"
                    )}>
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Mobility Privacy</Link>
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Global Terms</Link>
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Revenue Disclosure</Link>
                    </div>

                    <div className="text-center space-y-4">
                        <p className={cn("text-[10px] max-w-4xl leading-relaxed uppercase tracking-tighter", version === "v2" ? "text-v2-charcoal/40" : "text-zinc-600")}>
                            {version === "v2"
                                ? "Elysian Leaders 2026. Global mobility. Limitless potential."
                                : "ANDROMEDA 2026 GEOGRAPHICAL COMPLIANCE: REVENUE RESULTS VARY BY COUNTRY AND SYSTEM INTEGRATION INTENSITY. NO EARNINGS ARE GUARANTEED. THIS IS A GLOBAL ASSET DISTRIBUTION SYSTEM FOR HIGH-AUTHORITY PROFESSIONALS."}
                        </p>
                        <p className={cn("text-[10px]", version === "v2" ? "text-v2-charcoal/30" : "text-zinc-700")}>
                            © 2026 Elysian Leaders Global Architecture. Distributed by Shane & Vanessa.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function MobileTristan() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <MobileTristanContent />
        </Suspense>
    );
}
