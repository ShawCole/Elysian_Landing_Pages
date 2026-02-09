"use client";

import { AuroraBackground } from "@/components/magicui/aurora-background";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Zap, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SearchingSophie() {
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
        <div className="min-h-screen bg-black text-zinc-100 selection:bg-primary/30 font-sans">

            {/* GHL Hidden Fields / UTM Tracker */}
            <form id="ghl-tracking" className="hidden">
                <input type="hidden" name="avatar_id" value="sophie" />
            </form>

            <AuroraBackground className="px-4 py-8 md:py-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 md:pt-12"
                >
                    {/* LEFT: Hook & Video Placeholder */}
                    <div className="lg:col-span-7 flex flex-col gap-8 pb-32">
                        <div className="min-h-[320px] flex flex-col justify-center gap-8">
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase w-fit">
                                <Shield className="w-3.5 h3.5" />
                                <span>Andromeda Protocol Active</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-7xl lg:text-[75px] font-serif leading-[1] tracking-tight text-zinc-50"
                            >
                                The <span className="italic text-primary">Sovereign</span> Professional Pivot.
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                                Transitioning from corporate execution to distribution architecture.
                                A framework for high-authority individuals seeking absolute resource autonomy.
                            </motion.p>

                            {/* Spacer to match Trust Stack height of other pages for alignment */}
                            <div className="h-20" />
                        </div>

                        <motion.div variants={itemVariants} className="relative group aspect-video w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-md">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                                alt="Executive Boardroom"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="relative z-20 h-full flex items-center justify-center">
                                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-black shadow-2xl shadow-primary/20 hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-zinc-500 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span>Zero "Hustle" Logic. Architectural Distribution Only.</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-500 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span>2026 Andromeda Compliance Verified.</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Glassmorphism Lead Capture */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 relative lg:sticky lg:top-24"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50" />
                        <SpotlightCard className="relative bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <h2 className="text-2xl font-serif text-white mb-6">Initialize System Audit</h2>
                            <p className="text-zinc-400 text-sm mb-8">Access the restricted-tier distribution logic for established professionals.</p>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Professional Identity</label>
                                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Distribution Node</label>
                                    <input type="email" placeholder="Professional Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>

                                <button className="w-full mt-6 py-5 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(243,229,202,0.3)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2">
                                        UNLOCK ARCHITECTURE
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </button>

                                <p className="text-[10px] text-center text-zinc-600 mt-4 px-6">
                                    By initializing, you confirm your professional history meets the tier-1 authority threshold.
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Micro-Social Proof */}
                        <div className="mt-8 flex items-center justify-between px-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((idx) => (
                                    <div key={idx} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                                        {String.fromCharCode(64 + idx)}
                                    </div>
                                ))}
                            </div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                                +1,422 Elite Professionals
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AuroraBackground>

            {/* Core Logic Section (Below Hero) */}
            <section className="py-32 px-4 bg-black relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-primary font-bold text-xs tracking-widest uppercase">The Sovereign Framework</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">
                            Executing Roles vs. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Owning Distribution.</span>
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                The executive stagnant period is a systemic design flaw. High-authority professionals often find themselves managing infrastructure they will never own.
                            </p>
                            <p>
                                The Elysian "Professional Pivot" is the architectural move from being a <strong>component</strong> of a system to being the **owner** of the distribution logic. It replaces linear time-for-value with scalable revenue distribution.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <SpotlightCard className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-primary/20 transition-colors group">
                            <TrendingUp className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif mb-4 text-zinc-100">Revenue Distrubution Nodes</h3>
                            <p className="text-zinc-500 leading-relaxed font-sans text-base">
                                Moving from salary-based thresholds to uncapped distribution frameworks that scale with system intensity, not man-hours.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-primary/20 transition-colors group">
                            <Shield className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif mb-4 text-zinc-100">Sovereign Asset Management</h3>
                            <p className="text-zinc-500 leading-relaxed font-sans text-base">
                                Ensuring your professional output builds equity in your own distribution engine rather than a corporate roadmap you don't control.
                            </p>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* Global Footer (Compliance) */}
            <footer className="py-20 px-4 border-t border-white/5 bg-black">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <div className="font-serif text-2xl mb-8 tracking-tighter">
                        Elysian<span className="text-primary tracking-normal ml-0.5">Leaders</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-xs uppercase tracking-widest font-bold text-zinc-500">
                        <Link href="#" className="hover:text-primary transition-colors">Strategic Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Governance Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Distribution Disclosure</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Tier-1 Support</Link>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-[10px] text-zinc-600 max-w-4xl leading-relaxed uppercase tracking-tighter">
                            ANDROMEDA 2026 REVENUE COMPLIANCE: ALL FIGURES REFER TO POTENTIAL DISTRIBUTION SCALE WITHIN THE ELYSIAN FRAMEWORK. RESULTS VARY BASED ON SYSTEM INTEGRATION AND PROFESSIONAL AUTHORITY TIER. NO INCOME GUARANTEES ARE MADE. THIS IS NOT A BUSINESS OPPORTUNITY; IT IS A HIGH-TICKET ASSET DISTRIBUTION SYSTEM.
                        </p>
                        <p className="text-[10px] text-zinc-700">
                            © 2026 Elysian Leaders Architecture Group. 123 Sovereign Way, Tier 1 Plaza. Distributed by Shane & Vanessa.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
