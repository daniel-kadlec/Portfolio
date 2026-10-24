'use client'

import { useLanguage } from "@/utils/LanguageContext";
import Skill from "../../components/Skill";
import Heading from "../../components/Heading";
import TechMarquee from "@/components/TechMarquee";

import { FaCode } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { BsPalette2 } from "react-icons/bs";

export default function Portfolio() {
    const { dict } = useLanguage();

    return (
        <section
            className="section mb-[clamp(124px,_25vw,_256px)]"
        >
            <Heading
                className="!mb-[clamp(12px,_2vw,_32px)]"
                Heading={dict.skills.heading()}
                Subheading={dict.skills.subheading}
            />

            <div>
                <TechMarquee />
            </div>

            <div
                className="flex flex-col gap-[clamp(_24px,_3vw,_48px)]"
            >
                <div>
                    <Skill
                        heading={dict.skills.card_1_heading()}
                        paragraph={dict.skills.card_1_paragraph}
                        icon={<FaCode />}
                    />
                </div>

                <div>
                    <Skill
                        heading={dict.skills.card_2_heading()}
                        paragraph={dict.skills.card_2_paragraph}
                        icon={<FaPenNib />}
                    />
                </div>

                <div>
                    <Skill
                        heading={dict.skills.card_3_heading()}
                        paragraph={dict.skills.card_3_paragraph}
                        icon={<BsPalette2 />}
                    />
                </div>
            </div>
        </section>
    );
}
