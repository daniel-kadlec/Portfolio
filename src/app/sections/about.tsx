'use client'

import HopperElement from "@/components/HopperElement";
import Heading from "@/components/Heading";
import { useLanguage } from "@/utils/LanguageContext";

export default function About() {
    const { dict } = useLanguage();

    return (
        <section
            id="about"
            className="section flex flex-col md:flex-row mb-[clamp(124px,_25vw,_256px)]"
        >
            <div
                className="w-full md:w-1/2 md:mr-[clamp(_24px,_3vw,_48px)] flex flex-col justify-between mb-6 md:mb-0"
            >
                <Heading className={'!mb-0'} Heading={dict.about.heading()} Subheading={dict.about.subheading} />

                <div className="hidden md:block">
                    <div className="scale-x-[-1]">
                        <HopperElement
                            classIndividual={
                                '!bg-gray-200 dark:!bg-gray-900 !shadow-[inset_4px_4px_6px_rgba(210,210,221,0.6)] dark:shadow-![rgba(7,7,8,0.8)]'
                            }
                        />
                    </div>

                </div>
            </div>

            <div className="w-full md:w-1/2">
                <p className="text-secondary">{dict.about.paragraph()}</p>
            </div>

            <div
                className="md:hidden flex items-end gap-0 sm:gap-[clamp(_24px,_3vw,_48px)] mt-0 sm:-mt-6"
            >

                <div className="mb-6 scale-x-[-1]">
                    <HopperElement
                        classIndividual={
                            '!bg-gray-200 dark:!bg-gray-900 !shadow-[inset_4px_4px_6px_rgba(210,210,221,0.6)] dark:shadow-![rgba(7,7,8,0.8)]'
                        }
                        className="hidden sm:block"
                    />
                </div>
            </div>
        </section>
    );
}
