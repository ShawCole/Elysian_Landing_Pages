"use client";

import { AuroraBackground } from "@/components/magicui/aurora-background";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Zap, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Logo } from "@/components/brand/logo";

function SearchingSophieContent() {
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
                <input type="hidden" name="avatar_id" value="sophie" />
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
                    {/* LEFT: Hook & Video Placeholder */}
                    <div className="lg:col-span-7 flex flex-col gap-8 pb-32">
                        <div className="min-h-[320px] flex flex-col justify-center gap-8">
                            <motion.div variants={itemVariants} className={cn(
                                "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase w-fit",
                                version === "v2"
                                    ? "bg-v2-turquoise/10 border-v2-turquoise/20 text-v2-turquoise"
                                    : "bg-primary/10 border-primary/20 text-primary"
                            )}>
                                <Shield className="w-3.5 h-3.5" />
                                <span>{version === "v2" ? "Elysian System Active" : "Andromeda Protocol Active"}</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className={cn(
                                    "text-5xl md:text-7xl lg:text-[75px] leading-[1] tracking-tight",
                                    version === "v2" ? "font-serif text-v2-navy" : "font-serif text-zinc-50"
                                )}
                            >
                                {version === "v2" ? (
                                    <>Build the <span className="text-v2-turquoise">business</span>. <br />Live the <span className="text-v2-gold italic">life</span>.</>
                                ) : (
                                    <>The <span className="italic text-primary">Sovereign</span> Professional Pivot.</>
                                )}
                            </motion.h1>

                            <motion.p variants={itemVariants} className={cn(
                                "text-lg md:text-xl max-w-xl leading-relaxed",
                                version === "v2" ? "text-v2-charcoal" : "text-zinc-400"
                            )}>
                                {version === "v2"
                                    ? "Sustainable high-ticket online businesses for ambitious professionals seeking time + financial freedom."
                                    : "Transitioning from corporate execution to distribution architecture. A framework for high-authority individuals seeking absolute resource autonomy."}
                            </motion.p>

                            <div className="h-20" />
                        </div>

                        <motion.div variants={itemVariants} className={cn(
                            "relative group aspect-video w-full max-w-2xl rounded-2xl overflow-hidden border bg-zinc-900/50 backdrop-blur-md",
                            version === "v2" ? "border-v2-navy/10" : "border-white/10"
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                                alt="Executive Boardroom"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="relative z-20 h-full flex items-center justify-center">
                                <button className={cn(
                                    "w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform",
                                    version === "v2" ? "bg-v2-turquoise text-white" : "bg-primary text-black"
                                )}>
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <div className={cn("flex items-center gap-3 text-sm", version === "v2" ? "text-v2-charcoal" : "text-zinc-500")}>
                                <CheckCircle2 className={cn("w-4 h-4", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                                <span>{version === "v2" ? "Proven systems, real-world results." : "Zero \"Hustle\" Logic. Architectural Distribution Only."}</span>
                            </div>
                            <div className={cn("flex items-center gap-3 text-sm", version === "v2" ? "text-v2-charcoal" : "text-zinc-500")}>
                                <CheckCircle2 className={cn("w-4 h-4", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                                <span>{version === "v2" ? "Relatable luxury. Premium and clean." : "2026 Andromeda Compliance Verified."}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Glassmorphism Lead Capture */}
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
                                {version === "v2" ? "Start Your Journey" : "Initialize System Audit"}
                            </h2>
                            <p className={cn("text-sm mb-8", version === "v2" ? "text-v2-charcoal" : "text-zinc-400")}>
                                {version === "v2" ? "Design your income. Reclaim your time." : "Access the restricted-tier distribution logic for established professionals."}
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
                                        {version === "v2" ? "Access the Blueprint" : "Start Your Journey"}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </button>

                                <p className={cn("text-[10px] text-center mt-4 px-6", version === "v2" ? "text-v2-charcoal/60" : "text-zinc-600")}>
                                    {version === "v2" ? "No hype. No fluff. Just real results." : "By initializing, you confirm your professional history meets the tier-1 authority threshold."}
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Micro-Social Proof */}
                        <div className="mt-8 flex items-center justify-between px-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((idx) => (
                                    <div key={idx} className={cn(
                                        "w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold",
                                        version === "v2" ? "border-white bg-v2-cream text-v2-navy" : "border-black bg-zinc-800 text-white"
                                    )}>
                                        {String.fromCharCode(64 + idx)}
                                    </div>
                                ))}
                            </div>
                            <div className={cn("text-[10px] uppercase tracking-widest font-bold", version === "v2" ? "text-v2-turquoise" : "text-zinc-500")}>
                                +1,422 Professionals
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AuroraBackground>

            {/* Core Logic Section (Below Hero) */}
            <section className={cn(
                "py-32 px-4 relative",
                version === "v2" ? "bg-v2-cream" : "bg-black"
            )}>
                <div className={cn(
                    "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px]",
                    version === "v2" ? "bg-v2-navy/5" : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                )} />

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <span className={cn("font-bold text-xs tracking-widest uppercase", version === "v2" ? "text-v2-turquoise" : "text-primary")}>
                            {version === "v2" ? "Sustainable Abundance" : "The Sovereign Framework"}
                        </span>
                        <h2 className={cn("text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight", version === "v2" ? "text-v2-navy" : "text-white")}>
                            {version === "v2" ? (
                                <>Aspirational Realism. <br /><span className="text-v2-turquoise">Sustainable Business.</span></>
                            ) : (
                                <>Executing Roles vs. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Owning Distribution.</span></>
                            )}
                        </h2>
                        <div className={cn("space-y-6 text-lg leading-relaxed", version === "v2" ? "text-v2-charcoal" : "text-zinc-400")}>
                            <p>
                                {version === "v2"
                                    ? "We help you build a business that serves your life, not the other way around. No hustle culture, just smart systems."
                                    : "The executive stagnant period is a systemic design flaw. High-authority professionals often find themselves managing infrastructure they will never own."}
                            </p>
                            <p>
                                {version === "v2"
                                    ? "Our framework is designed for the modern professional who values impact, purpose, and alignment over just another corporate milestone."
                                    : "The Elysian \"Professional Pivot\" is the architectural move from being a component of a system to being the owner of the distribution logic. It replaces linear time-for-value with scalable revenue distribution."}
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <SpotlightCard className={cn(
                            "p-10 rounded-3xl transition-colors group",
                            version === "v2" ? "bg-white border-v2-navy/5 hover:border-v2-turquoise/30" : "bg-zinc-900/30 border-white/5 hover:border-primary/20"
                        )}>
                            <TrendingUp className={cn("w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                            <h3 className={cn("text-2xl font-serif mb-4", version === "v2" ? "text-v2-navy" : "text-zinc-100")}>
                                {version === "v2" ? "Freedom Architecture" : "Revenue Distrubution Nodes"}
                            </h3>
                            <p className={cn("leading-relaxed font-sans text-base", version === "v2" ? "text-v2-charcoal" : "text-zinc-500")}>
                                {version === "v2"
                                    ? "Build systems that create time and financial freedom through proven acquisition frameworks."
                                    : "Moving from salary-based thresholds to uncapped distribution frameworks that scale with system intensity, not man-hours."}
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className={cn(
                            "p-10 rounded-3xl transition-colors group",
                            version === "v2" ? "bg-white border-v2-navy/5 hover:border-v2-turquoise/30" : "bg-zinc-900/30 border-white/5 hover:border-primary/20"
                        )}>
                            <Shield className={cn("w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500", version === "v2" ? "text-v2-turquoise" : "text-primary")} />
                            <h3 className={cn("text-2xl font-serif mb-4", version === "v2" ? "text-v2-navy" : "text-zinc-100")}>
                                {version === "v2" ? "Life Reclamation" : "Sovereign Asset Management"}
                            </h3>
                            <p className={cn("leading-relaxed font-sans text-base", version === "v2" ? "text-v2-charcoal" : "text-zinc-500")}>
                                {version === "v2"
                                    ? "Exit the constraints of the corporate world and reclaim your time for what matters most."
                                    : "Ensuring your professional output builds equity in your own distribution engine rather than a corporate roadmap you don't control."}
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
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Strategic Privacy</Link>
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Governance Terms</Link>
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Distribution Disclosure</Link>
                        <Link href="#" className={cn("transition-colors", version === "v2" ? "hover:text-v2-turquoise" : "hover:text-primary")}>Tier-1 Support</Link>
                    </div>

                    <div className="text-center space-y-4">
                        <p className={cn("text-[10px] max-w-4xl leading-relaxed uppercase tracking-tighter", version === "v2" ? "text-v2-charcoal/40" : "text-zinc-600")}>
                            {version === "v2"
                                ? "Elysian Leaders 2026. All rights reserved. High-ticket systems for real-world results."
                                : "ANDROMEDA 2026 REVENUE COMPLIANCE: ALL FIGURES REFER TO POTENTIAL DISTRIBUTION SCALE WITHIN THE ELYSIAN FRAMEWORK. RESULTS VARY BASED ON SYSTEM INTEGRATION AND PROFESSIONAL AUTHORITY TIER. NO INCOME GUARANTEES ARE MADE. THIS IS NOT A BUSINESS OPPORTUNITY; IT IS A HIGH-TICKET ASSET DISTRIBUTION SYSTEM."}
                        </p>
                        <p className={cn("text-[10px]", version === "v2" ? "text-v2-charcoal/30" : "text-zinc-700")}>
                            © 2026 Elysian Leaders Architecture Group. 123 Sovereign Way, Tier 1 Plaza. Distributed by Shane & Vanessa.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function SearchingSophie() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <SearchingSophieContent />
        </Suspense>
    );
}
