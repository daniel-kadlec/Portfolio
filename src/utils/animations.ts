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
    hidden: {},
    visible: {
        opacity: [0, 1],
        y: [20, 0],
        filter: ["blur(10px)", "blur(0px)"],
        scale: [0.98, 1],
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
