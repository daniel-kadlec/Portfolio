'use client'

import Technologies from "@/components/Technologies";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/utils/LanguageContext";
import { getProject } from "@/utils/GetProject";
import { IoPlayBackCircle } from "react-icons/io5";
import {useEffect, useState} from "react";
import Link from "next/link";
import { TechName } from "@/components/Technologies";
import { notFound } from "next/navigation";
import { ProjectType } from "../types/project";
import ProjectGallery from "../../components/Gallery/ProjectGallery";
import Lightbox from "@/components/Gallery/Lightbox";
export default function Project({ project }: { project: ProjectType }) {
    const params = useParams();
    const router = useRouter();
    const { lang, dict } = useLanguage();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [openedImage, setOpenedImage] = useState(0);

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

            <section
                id="project"
                className="section !max-w-[1550px] relative py-[clamp(112px,_25vw,_150px)]"
            >
                <div
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
                </div>

                <div className="flex flex-col mt-10">
                    <h1 className="text-h1">
                        {project.title}
                    </h1>
                    <h2 className="text-subheading-green">
                        {project.subtitle}
                    </h2>
                    <p className="text-secondary mt-8">
                        {project.description}
                    </p>
                </div>

                <div
                    className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 mt-12"
                >
                    <div
                        className="project-section !p-[clamp(24px,_2vw,_32px)] w-full flex flex-col gap-6"
                    >
                        <div>
                            <h2 className="text-h2">title</h2>
                            <h3 className="text-subheading-green">subtitle</h3>
                        </div>
                        <p className="text-secondary">
                            {project.technical_description}
                        </p>
                        <div>
                            <Technologies techs={project.technologies as TechName[]} />
                        </div>
                    </div>

                    <div
                        className="flex flex-col gap-0 lg:gap-6 justify-between font-secondary w-full"
                    >
                        <div className="w-full">
                            <div className="scale-y-[-1] hidden lg:block">
                            </div>
                        </div>

                        <div
                            className="flex flex-row lg:flex-col justify-between items-end lg:justify-end gap-6 text text-left lg:text-right"
                        >
                            <div className="flex flex-col gap-6">
                                <span className="flex flex-col">
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
                                </span>
                                <span className="flex flex-col">
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
                                </span>
                            </div>

                            <div className="hidden sm:block lg:hidden scale-x-[-1]">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6 sm:mt-16">
                </div>

                <div>
                    <ProjectGallery
                        images={images}
                        alt={alt}
                        handleLightboxOpen={handleLightboxOpen}
                        isMobile={isMobile}
                    />

                </div>
            </section></div>

    );
}
