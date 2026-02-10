"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

async function waitForFonts(): Promise<void> {
    try {
        if (document.fonts?.ready) {
            await document.fonts.ready;
        }
    } catch {
    }
}


export default function LoadingOverlay({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const [ready, setReady] = React.useState(false);

    React.useEffect(() => {
        let cancelled = false;

        const waitAll = (async () => {
            const fontP = waitForFonts();

            const timeoutP = new Promise<void>((resolve) =>
                setTimeout(resolve, 4000)
            );

            await Promise.race([Promise.all([fontP]).then(() => undefined), timeoutP]);

            if (!cancelled) setReady(true);
        })();

        return () => {
            cancelled = true;
            void waitAll;
        };
    }, []);

    return (
        <>
            <noscript>
                <style>{`.app-loader{display:none!important}.app-content{opacity:1!important}`}</style>
            </noscript>

            <motion.div
                className="app-content"
                initial={false}
                animate={{ opacity: ready ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {children}
            </motion.div>

            <AnimatePresence>
                {!ready && (
                    <motion.div
                        key="app-loader"
                        className="app-loader fixed inset-0 z-[9999] flex items-center justify-center bg-offwhite dark:bg-offblack text"
                        initial={false}
                        animate={{ opacity: [0, 1] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        aria-live="polite"
                        aria-busy="true"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div
                                className="spinner"
                                role="status"
                                aria-label="Loading"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
