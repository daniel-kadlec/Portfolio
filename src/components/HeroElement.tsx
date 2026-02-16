import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroElement() {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <motion.div
            className="absolute top-[-250px] md:top-[-300px] right-[-550px] xs:right-[-500px] rotate-[320deg] flex flex-col gap-8 z-0 scale-50 xs:scale-75 md:scale-100"
            initial={{ opacity: 0, x:50 }}
            animate={hydrated ? { opacity: 1, x:0 } : undefined}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
        >
            <div className="hero-element" />
            <div className="hero-element -translate-x-[100px]" />
            <div className="hero-element" />
        </motion.div>
    );
}
