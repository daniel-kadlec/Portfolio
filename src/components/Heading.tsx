"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { childAnimation } from "@/utils/animations";


interface HeadingProps {
    Heading: ReactNode;
    Subheading?: string;
    className?: string;
}

export default function Heading({ Heading, Subheading, className }: HeadingProps) {
    const r = useReducedMotion();
    const [ready, setReady] = useState(false);

    // Wait for scroll position to reset before allowing animation
    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);


    // if (!ready) return null; //  Prevent premature Framer check before layout settles

    return (
        <div className={`mb-[clamp(32px,3vw,72px)] ${className ?? ""}`}>
            <motion.h1
                className="text-h1 tracking-tight"
                variants={childAnimation}
                viewport={{ once: true, amount: 0.6 }}
            >
                {Heading}
            </motion.h1>

            {Subheading && (
                <motion.h2
                    className="text-subheading mt-3 sm:mt-0 text-gray-300"
                    variants={childAnimation}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    {Subheading}
                </motion.h2>
            )}
        </div>
    );
}
