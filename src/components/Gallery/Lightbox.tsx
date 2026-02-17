import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import {motion, AnimatePresence} from "framer-motion";


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
            <motion.div
                className="fixed inset-0 z-[99] bg-black/75 backdrop-blur-xs"
                key="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
            />
            <motion.div
                key="lightbox-content"
                className="fixed inset-0 z-[100] flex"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={onClose}
            >

                    <div
                        className="m-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence mode="popLayout">
                            <motion.div className={'flex justify-between lightboxText'}
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}>
                                <h1>{image_description[index]}</h1>
                                <h1>{index + 1} / {images.length}</h1>
                            </motion.div>
                        </AnimatePresence>
                        <div className="relative">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="w-fit"
                                >
                                    <Image
                                        src={images[index]}
                                        alt={image_description[index]}
                                        width={4000}
                                        height={4000}
                                        className="w-auto h-auto max-w-[95vw] xl:max-w-[78vw] max-h-[90vh] object-contain rounded-xl"
                                    />
                                </motion.div>
                            </AnimatePresence>

                        </div>


                        <button
                            onClick={onPrev}
                            className="left-[20vw] md:left-8 lightboxButton lightboxButtonHover"
                        >
                            <IoChevronBackOutline className={'w-full text-[36px] -ml-[3px]'} />
                        </button>

                        <button
                            onClick={onNext}
                            className="right-[20vw] md:right-8 lightboxButton lightboxButtonHover"
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
                </motion.div>
        </>

    );
}
