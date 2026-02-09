"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <main>
            <div
                className={cn(
                    "relative flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950  text-slate-950 transition-bg",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        //   I'm using a lot of colors here to mimic the aurora effect
                        className={cn(
                            `
            [--white-gradient:linear-gradient(to_bottom,white,transparent)]
            [--dark-gradient:linear-gradient(to_bottom,var(--zinc-950),transparent)]
            [--aurora:radial-gradient(ellipse_at_100%_0%,#3b82f6_0%,#1d4ed8_20%,#1e3a8a_40%,#1e1b4b_60%,#020617_80%)]
            dark:[--aurora:radial-gradient(ellipse_at_100%_0%,#3b82f6_0%,#1d4ed8_20%,#1e3a8a_40%,#1e1b4b_60%,#020617_80%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
                        )}
                    ></div>
                </div>
                {children}
            </div>
        </main>
    );
};
