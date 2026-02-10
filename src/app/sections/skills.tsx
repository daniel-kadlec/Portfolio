'use client'

import { motion } from "framer-motion";
import { useLanguage } from "@/utils/LanguageContext";
import Skill from "../../components/Skill";
import Heading from "../../components/Heading";
import TechMarquee from "@/components/TechMarquee";
import { childAnimation, containerAnimation } from "@/utils/animations";

import { FaCode } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { BsPalette2 } from "react-icons/bs";

export default function Portfolio() {
    const { dict } = useLanguage();

    return (
        <motion.section
            className="section mb-[clamp(124px,_25vw,_256px)]"
            variants={containerAnimation}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <Heading
                className="!mb-[clamp(12px,_2vw,_32px)]"
                Heading={dict.skills.heading()}
                Subheading={dict.skills.subheading}
            />

            <motion.div variants={childAnimation}>
                <TechMarquee />
            </motion.div>

            <motion.div
                variants={containerAnimation}
                className="flex flex-col gap-[clamp(_24px,_3vw,_48px)]"
            >
                <motion.div variants={childAnimation}>
                    <Skill
                        heading={dict.skills.card_1_heading()}
                        paragraph={dict.skills.card_1_paragraph}
                        icon={<FaCode />}
                    />
                </motion.div>

                <motion.div variants={childAnimation}>
                    <Skill
                        heading={dict.skills.card_2_heading()}
                        paragraph={dict.skills.card_2_paragraph}
                        icon={<FaPenNib />}
                    />
                </motion.div>

                <motion.div variants={childAnimation}>
                    <Skill
                        heading={dict.skills.card_3_heading()}
                        paragraph={dict.skills.card_3_paragraph}
                        icon={<BsPalette2 />}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
