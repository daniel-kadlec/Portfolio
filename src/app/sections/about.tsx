'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HopperElement from "@/components/HopperElement";
import Heading from "@/components/Heading";
import { useLanguage } from "@/utils/LanguageContext";
import { childAnimation, containerAnimation } from "@/utils/animations";

export default function About() {
    const { dict } = useLanguage();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <motion.section
            id="about"
            className="section flex flex-col md:flex-row mb-[clamp(124px,_25vw,_256px)]"
            variants={containerAnimation}
            initial={hydrated ? "hidden" : false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
        >
            <motion.div
                variants={childAnimation}
                className="w-full md:w-1/2 md:mr-[clamp(_24px,_3vw,_48px)] flex flex-col justify-between mb-6 md:mb-0"
            >
                <Heading className={'!mb-0'} Heading={dict.about.heading()} Subheading={dict.about.subheading} />

                <div className="hidden md:block">
                    <motion.div variants={childAnimation} className="scale-x-[-1]">
                        <HopperElement
                            classIndividual={
                                '!bg-gray-200 dark:!bg-gray-900 !shadow-[inset_4px_4px_6px_rgba(210,210,221,0.6)] dark:shadow-![rgba(7,7,8,0.8)]'
                            }
                        />
                    </motion.div>

                    {/*<motion.a variants={item} href="/zivotopis.pdf" download>*/}
                    {/*    <Button className="w-full mt-12 sm:mt-0">*/}
                    {/*        {dict.about.button}*/}
                    {/*        <LuDownload className="h-5 w-5 lg:h-6 lg:w-6" />*/}
                    {/*    </Button>*/}
                    {/*</motion.a>*/}
                </div>
            </motion.div>

            <motion.div variants={childAnimation} className="w-full md:w-1/2">
                <p className="text-secondary">{dict.about.paragraph()}</p>
            </motion.div>

            <motion.div
                variants={childAnimation}
                className="md:hidden flex items-end gap-0 sm:gap-[clamp(_24px,_3vw,_48px)] mt-0 sm:-mt-6"
            >
                {/*<motion.a variants={item} href="/zivotopis.pdf" download className="w-full">*/}
                {/*    <Button className="w-full max-h-13 mb-6 mt-12 sm:mt-0">*/}
                {/*        {dict.about.button}*/}
                {/*        <LuDownload className="h-5 w-5 lg:h-6 lg:w-6" />*/}
                {/*    </Button>*/}
                {/*</motion.a>*/}

                <motion.div variants={childAnimation} className="mb-6 scale-x-[-1]">
                    <HopperElement
                        classIndividual={
                            '!bg-gray-200 dark:!bg-gray-900 !shadow-[inset_4px_4px_6px_rgba(210,210,221,0.6)] dark:shadow-![rgba(7,7,8,0.8)]'
                        }
                        className="hidden sm:block"
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
