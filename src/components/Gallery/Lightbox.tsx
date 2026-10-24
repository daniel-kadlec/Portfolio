import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";


type LightboxProps = {
    images: string[];
    image_description: string[];
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
};


export default function Lightbox({images, image_description, index, onClose, onNext, onPrev}: LightboxProps) {

    return (
        <>
            <div
                className="fixed inset-0 z-[99] bg-black/75 backdrop-blur-xs"
                key="lightbox-backdrop"
            />
            <div
                key="lightbox-content"
                className="fixed inset-0 z-[100] flex"
                onClick={onClose}
            >

                    <div
                        className="m-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={'flex justify-between lightboxText'}>
                                <h1>{image_description[index]}</h1>
                                <h1>{index + 1} / {images.length}</h1>
                        </div>
                        <div className="relative">
                                <div className="w-fit">
                                    <Image
                                        src={images[index]}
                                        alt={image_description[index]}
                                        width={4000}
                                        height={4000}
                                        className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-xl"
                                    />
                                </div>

                        </div>


                        <button
                            onClick={onPrev}
                            className="left-[20vw] lightboxButton lightboxButtonHover"
                        >
                            <IoChevronBackOutline className={'w-full text-[36px] -ml-[3px]'} />
                        </button>

                        <button
                            onClick={onNext}
                            className="right-[20vw] lightboxButton lightboxButtonHover"
                        >
                            <IoChevronBackOutline className={'w-full text-[36px] rotate-180 ml-[2px]'} />
                        </button>

                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 bg-black/50 text-white w-14 h-14 rounded-full cursor-pointer flex justify-center items-center lightboxButtonHover"
                        >
                            <IoIosClose className={'text-[44px] -mb-[2px]'}/>
                        </button>
                    </div>
                </div>
        </>

    );
}
