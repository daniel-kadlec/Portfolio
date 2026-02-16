'use client'

import Technologies from "@/components/Technologies";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/utils/LanguageContext";
import { getProject } from "@/utils/GetProject";
import { IoPlayBackCircle } from "react-icons/io5";
import {useEffect, useState} from "react";
import Link from "next/link";
import { TechName } from "@/components/Technologies";
import HopperElement from "@/components/HopperElement";
import { notFound } from "next/navigation";
import { ProjectType } from "../types/project";
import {AnimatePresence, motion} from "framer-motion";
import ProjectGallery from "../../components/Gallery/ProjectGallery";
import Lightbox from "@/components/Gallery/Lightbox";
import { childAnimation, containerAnimation } from "@/utils/animations";
export default function Project({ project }: { project: ProjectType }) {
    const params = useParams();
    const router = useRouter();
    const { lang, dict } = useLanguage();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [openedImage, setOpenedImage] = useState(0);

    const [isAnimating, setIsAnimating] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    const handleAnimate = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    project = getProject(params.project as string, lang)!;
    if (!project) notFound();

    const images = [
        project.image_main,
        project.image_1,
        project.image_2,
        project.image_3,
        project.image_4,
    ].filter(Boolean) as string[];

    const alt = [
        project.image_main_alt ?? "",
        project.image_1_alt ?? "",
        project.image_2_alt ?? "",
        project.image_3_alt ?? "",
        project.image_4_alt ?? "",
    ];

    const handleLightboxOpen = (index: number) => {
        if (isMobile) return;
        setOpenedImage(index);
        setIsLightboxOpen(true);
    };


    const handleLightboxClose = () => {
        setIsLightboxOpen(false);
    };

    const useIsMobile = (maxWidth = 450) => {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const check = () => setIsMobile(window.innerWidth < maxWidth);
            check();
            window.addEventListener("resize", check);
            return () => window.removeEventListener("resize", check);
        }, [maxWidth]);

        return isMobile;
    };
    const isMobile = useIsMobile(450);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!isLightboxOpen) return;

        const scrollY = window.scrollY;

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';

            window.scrollTo(0, scrollY);
        };
    }, [isLightboxOpen]);

    const next = () =>
        setOpenedImage((i) => (i + 1) % images.length);

    const prev = () =>
        setOpenedImage((i) => (i - 1 + images.length) % images.length)


    return (
        <div className={"relative"}>

            <AnimatePresence mode="wait">
                {isLightboxOpen && (

                        <Lightbox
                            images={images}
                            image_description={alt}
                            index={openedImage}
                            onClose={handleLightboxClose}
                            onNext={next}
                            onPrev={prev}
                        />
                )}
            </AnimatePresence>

            <motion.section
                id="project"
                className="section !max-w-[1550px] relative py-[clamp(112px,_25vw,_150px)]"
                variants={containerAnimation}
                initial={hydrated ? "hidden" : false}
                whileInView="visible"
                animate="visible"
            >
                <motion.div
                    variants={childAnimation}
                    onHoverStart={handleAnimate}
                    animate={
                        isAnimating
                            ? { rotate: [0, 30, -30, 15, -10, 0] }
                            : { rotate: 0 }
                    }
                    transition={
                        isAnimating
                            ? {
                                duration: 0.7,
                                ease: "easeInOut",
                            }
                            : {}
                    }
                    onClick={() => {
                        document.documentElement.style.scrollBehavior = "auto";
                        router.back();
                        setTimeout(() => {
                            document.documentElement.style.scrollBehavior = "";
                        }, 100);
                    }}
                    className="p-[1px] bg-offwhite dark:bg-offblack border-offblack dark:border-offwhite border-2 rounded-full w-14 h-14 top-6 left-6 cursor-pointer fixed z-50"
                >
                    <IoPlayBackCircle className=" text-offblack dark:text-offwhite w-full h-full" />
                </motion.div>

                <motion.div variants={childAnimation} className="flex flex-col mt-10">
                    <motion.h1 variants={childAnimation} className="text-h1">
                        {project.title}
                    </motion.h1>
                    <motion.h2 variants={childAnimation} className="text-subheading-green">
                        {project.subtitle}
                    </motion.h2>
                    <motion.p variants={childAnimation} className="text-secondary mt-8">
                        {project.description}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={childAnimation}
                    className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 mt-12"
                >
                    <motion.div
                        variants={childAnimation}
                        className="project-section !p-[clamp(24px,_2vw,_32px)] w-full flex flex-col gap-6"
                    >
                        <motion.div variants={childAnimation}>
                            <h2 className="text-h2">{dict.project.technical_title}</h2>
                            <h3 className="text-subheading-green">{dict.project.technical_subtitle}</h3>
                        </motion.div>
                        <motion.p variants={childAnimation} className="text-secondary">
                            {project.technical_description}
                        </motion.p>
                        <motion.div variants={childAnimation}>
                            <Technologies techs={project.technologies as TechName[]} />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={childAnimation}
                        className="flex flex-col gap-0 lg:gap-6 justify-between font-secondary w-full"
                    >
                        <motion.div variants={childAnimation} className="w-full">
                            <div className="scale-y-[-1] hidden lg:block">
                                <HopperElement />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={childAnimation}
                            className="flex flex-row lg:flex-col justify-between items-end lg:justify-end gap-6 text text-left lg:text-right"
                        >
                            <div className="flex flex-col gap-6">
                                <motion.span variants={childAnimation} className="flex flex-col">
                                    <h3 className="text-h2">{project.anchorTitle1}</h3>
                                    {project.anchor1 && (
                                        <Link
                                            className="text-body-large !mt-1 !text-green-secondary dark:!text-gray-400 hover:underline"
                                            target="_blank"
                                            href={project.anchor1}
                                        >
                                            {project.anchorPlaceholder1}
                                        </Link>
                                    )}
                                </motion.span>
                                <motion.span variants={childAnimation} className="flex flex-col">
                                    <h3 className="text-h2">{project.anchorTitle2}</h3>
                                    {project.anchor2 && (
                                        <Link
                                            className="text-body-large !mt-1 !text-green-secondary dark:!text-gray-400 hover:underline"
                                            target="_blank"
                                            href={project.anchor2}
                                        >
                                            {project.anchorPlaceholder2}
                                        </Link>
                                    )}
                                </motion.span>
                            </div>

                            <motion.div variants={childAnimation} className="hidden sm:block lg:hidden scale-x-[-1]">
                                <HopperElement />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div variants={childAnimation} className="w-full mt-6 sm:mt-16">
                </motion.div>

                <motion.div
                    variants={childAnimation}>
                    <ProjectGallery
                        images={images}
                        alt={alt}
                        handleLightboxOpen={handleLightboxOpen}
                        isMobile={isMobile}
                    />

                </motion.div>
            </motion.section></div>

    );
}
