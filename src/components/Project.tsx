import Link from "next/link";
import Button from "@/components/Button";
import Technologies, { TechName } from "@/components/Technologies";
import { useLanguage } from "@/utils/LanguageContext";
import Image from "next/image";

type ProjectProps = {
    title: string;
    subtitle: string;
    techs: TechName[];
    image: string;
    link: string;
    from?: "index" | "portfolio";
};
export default function Project({ title, subtitle, techs, image, link, from = "index" }: ProjectProps) {
    const { dict } = useLanguage();

    const href = from === "index" ? `/${link}` : `/portfolio/${link}`;

    return (
        <Link href={href}>
            <div className="flex flex-col gap-[28px]">
                <div className="relative aspect-[5/3] w-full rounded-2xl shadow-md overflow-hidden">
                    <Image
                        src={image}
                        alt="Preview"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="flex flex-col justify-between w-fullf">
                    <div className="px-1">
                        <h1 className="text-h3">{title}</h1>
                        <h2 className="text-subheading-green">{subtitle}</h2>
                    </div>
                    <div className="w-full flex justify-end">
                    </div>
                </div>
            </div>
        </Link>

    );
}
