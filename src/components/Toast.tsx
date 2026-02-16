'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {useLanguage} from "@/utils/LanguageContext";

interface ToastProps {
    id: number;
    message: string;
    success: boolean | null;
}

export default function Toast({ id, message, success}: ToastProps) {
    const { dict } = useLanguage();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <motion.div
            key={id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={hydrated ? { opacity: 1, y: 0 } : undefined}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, layout: { duration: 0.25 } }}
            className={`relative px-8 py-6 w-full sm:w-fit rounded-none sm:rounded-xl shadow-lg border-0 border-t-2 sm:border-2 overflow-hidden text flex flex-col bg-gray-200 dark:bg-gray-900 ${
                success
                    ? "border-gray-700 sm:border-green-primary"
                    : "border-gray-700 sm:border-red-error"
            }`}
        >
      <span className="font-secondary font-bold text-2xl">
        {success
            ? dict.contact.toast_success_heading
            : dict.contact.toast_error_heading}
      </span>

            <span className="text-lg font-semibold">{message}</span>

            <motion.div
                className={`w-full h-1 absolute top-0 sm:bottom-0 left-0 rounded-full ${
                    success ? "bg-green-primary" : "bg-red-error"
                }`}
                initial={{ scaleX: 1, transformOrigin: "left" }}
                animate={hydrated ? { scaleX: 0 } : undefined}
                transition={{ duration: 4, ease: "linear" }}
            />
        </motion.div>
    );
}
