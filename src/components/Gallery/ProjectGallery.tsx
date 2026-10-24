import GalleryImage from "@/components/Gallery/GalleryImage";
import { useState } from "react";

type ProjectGalleryProps = {
    images: string[];
    alt: string[];
    handleLightboxOpen: (index: number) => void;
    isMobile: boolean;
};

export default function ProjectGallery({
                                           images,
                                           alt,
                                           handleLightboxOpen,
                                           isMobile,
                                       }: ProjectGalleryProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    const baseClasses = isMobile
        ? ""
        : "cursor-pointer transition-all duration-500 ease-out";

    const handleMouseEnter = (id: number) => {
        if (!isMobile) setHovered(id);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setHovered(null);
    };

    const getStyle = (id: number) => {
        if (isMobile) {
            return "opacity-100 scale-100";
        }

        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
            ${baseClasses}
            ${isHovered ? "scale-100" : isOther ? "opacity-50" : "opacity-100"}
        `;
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {images[0] && (
                <GalleryImage
                    url={images[0]}
                    alt={alt[0]}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    className={getStyle(0)}
                    onClick={() => handleLightboxOpen(0)}
                />
            )}

            <div className="grid grid-cols-1 gap-6">
                {images.slice(1, 5).map((img, i) =>
                    img ? (
                        <GalleryImage
                            key={i + 1}
                            url={img}
                            alt={alt[i + 1]}
                            onMouseEnter={() => handleMouseEnter(i + 1)}
                            onMouseLeave={handleMouseLeave}
                            className={getStyle(i + 1)}
                            onClick={() => handleLightboxOpen(i + 1)}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
}
