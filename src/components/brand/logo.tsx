
import Image from "next/image";
import { cn } from "@/lib/utils";
import LogoWhite from "./Logo_White.png";
import LogoBlack from "./Logo_Black.png";

interface LogoProps {
    className?: string;
    version: "v1" | "v2";
}

export const Logo: React.FC<LogoProps> = ({ className, version }) => {
    return (
        <div className={cn("relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-4", className)}>
            <Image
                src={version === "v1" ? LogoWhite : LogoBlack}
                alt="Elysian Leaders Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
};
