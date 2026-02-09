"use client";

import { AuroraBackground } from "@/components/magicui/aurora-background";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, Star, Users, Briefcase, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StrategicAva() {
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
                <input type="hidden" name="avatar_id" value="ava" />
            </form>

            <AuroraBackground className="px-4 py-8 md:py-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 md:pt-12"
                >
                    {/* LEFT: The Ava Protocol */}
                    <div className="lg:col-span-7 flex flex-col gap-8 pb-32">
                        <div className="min-h-[320px] flex flex-col justify-center gap-8">
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase w-fit">
                                <Shield className="w-3.5 h-3.5" />
                                <span>Supported Logic Framework</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-7xl lg:text-[75px] font-serif leading-[1] tracking-tight text-zinc-50"
                            >
                                The <span className="italic text-primary">Distribution</span> Framework for Strategic Professionals.
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                                Advancing beyond the "hustle" threshold. A supported distribution model for professionals transitioning toward secondary revenue streams without sacrificing legacy standards.
                            </motion.p>

                            {/* Visual Social Proof Element (Trust Stack) */}
                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 py-4 border-y border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-primary">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">4.9/5 Community Rating</span>
                                </div>
                                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                                <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">
                                    Featured in Industry Case Studies & Governance Publications
                                </div>
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="relative group aspect-video w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-md">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
                                alt="Executive Strategic Suite"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">The Ava Logic</p>
                                <p className="text-lg font-serif">Comparing High-Ticket Support vs. Solo-Hustle</p>
                            </div>
                            <div className="relative z-20 h-full flex items-center justify-center">
                                <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: System Audit Command Center */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 relative lg:sticky lg:top-24"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50" />
                        <SpotlightCard className="relative bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <h2 className="text-2xl font-serif text-white mb-6">Efficiency Audit Interface</h2>
                            <p className="text-zinc-400 text-sm mb-8">Determine the feasibility of a supported distribution model for your professional history.</p>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Strategic Identity</label>
                                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Distribution Hub</label>
                                    <input type="email" placeholder="Professional Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>

                                <button className="w-full mt-6 py-5 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(243,229,202,0.3)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2 leading-none uppercase tracking-tighter">
                                        ACCESS FREEDOM BLUEPRINT & MASTERCLASS
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </button>

                                <p className="text-[10px] text-center text-zinc-600 mt-4 px-6 leading-relaxed">
                                    Initializing this audit confirms your intent to explore architectural scale through supported distribution systems.
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </AuroraBackground>

            {/* Logic & Distribution Section */}
            <section className="py-32 px-4 bg-black relative">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-primary font-bold text-xs tracking-widest uppercase">The Efficiency Logic</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">
                            Why "More Effort" <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Is The Terminal Trap.</span>
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                Professional development often plateaus when talent outpaces the available infrastructure. Most individuals attempt to solve this by increasing effort—a linear solution to a structural problem.
                            </p>
                            <p>
                                The shift toward a <strong>supported distribution model</strong> moves the weight of execution from the individual to a pre-verified engine. This is the difference between solo-hustle and architectural ownership.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <SpotlightCard className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-primary/20 transition-colors group">
                            <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif mb-4 text-zinc-100">Supported Infrastructure</h3>
                            <p className="text-zinc-500 leading-relaxed font-sans text-base">
                                Leveraging established distribution nodes to eliminate the friction of building a vehicle from the ground up.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-primary/20 transition-colors group">
                            <Briefcase className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-serif mb-4 text-zinc-100">Legacy Standards</h3>
                            <p className="text-zinc-500 leading-relaxed font-sans text-base">
                                Maintaining your professional reputation while scaling through systems that mirror high-end executive frameworks.
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
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-[10px] text-zinc-600 max-w-4xl leading-relaxed uppercase tracking-tighter">
                            ANDROMEDA 2026 REVENUE COMPLIANCE: SYSTEM SCALE IS DEPENDENT ON INDIVIDUAL AUTHORITY AND LOGIC INTEGRATION. ALL FIGURES REPRESENT DISTRIBUTION POTENTIAL. NO SPECIFIC REVENUE OUTCOMES ARE GUARANTEED. THIS IS A SUPPORTED DISTRIBUTION VEHICLE, NOT A FRANCHISE OR BUSINESS OPPORTUNITY.
                        </p>
                        <p className="text-[10px] text-zinc-700">
                            © 2026 Elysian Leaders Architecture Group. Distributed by Shane & Vanessa.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
