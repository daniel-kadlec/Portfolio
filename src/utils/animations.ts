import { Variants } from "framer-motion";

export const containerAnimation: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const childAnimation: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
