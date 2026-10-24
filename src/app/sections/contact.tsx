'use client'

import { useLanguage } from "@/utils/LanguageContext";
import Heading from "@/components/Heading";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
    const { dict } = useLanguage();

    return (
        <>
            <section
                id="contact"
                className="section flex mb-[clamp(64px,_15vw,_120px)] flex-col"
            >
                <Heading
                    className="!mb-[clamp(_0px,_3vw,_72px)]"
                    Heading={dict.contact.heading()}
                />

                <div className="flex gap-8 lg:flex-row flex-col">
                    <div className="lg:w-1/2">
                        <p className="text text-body-large font-bold">
                            {dict.contact.paragraph()}
                        </p>
                        <SocialLinks/>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </>
    );
}

function SocialLinks() {
    const { dict } = useLanguage();
    const links = [
        { href: "https://github.com/Decayyer107", label: "Github", icon: <FaGithub className="contact-icon" /> },
        { href: "https://x.com/dan_kadlec", label: dict.contact.contact_twitter, icon: <FaXTwitter className="contact-icon" /> },
        { href: "https://www.linkedin.com/in/daniel-kadlec-903759379/", label: "LinkedIn", icon: <FaLinkedin className="contact-icon" /> },
        { href: "mailto:kontakt@danielkadlec.cz", label: "E-mail", icon: <FaEnvelope className="contact-icon mt-1" /> },
    ];

    return (
        <div
            className="text text-[clamp(20px,2vw,34px)] font-bold flex justify-center px-10 xs:px-0 xs:grid xs:grid-cols-2 lg:flex lg:flex-col gap-12 xs:gap-6 mt-8"
        >
            {links.map(({ href, label, icon }) => (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    className="cursor-pointer w-fit hover:underline flex items-center gap-5 text-[40px]"
                >
                    {icon}
                    <span className="hidden xs:inline text-[clamp(24px,4vw,38px)]">{label}</span>
                </a>
            ))}
        </div>
    );
}
