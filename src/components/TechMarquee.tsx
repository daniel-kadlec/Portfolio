"use client";

import { getTechMap, TechName } from "./Technologies";


export default function TechMarquee() {
    const techMap = getTechMap();
    const techs = Object.keys(techMap) as TechName[];

    const scrollingTechs = [...techs, ...techs, ...techs];



    return (
        <div
            className="overflow-hidden whitespace-nowrap py-4 mb-[clamp(12px,_2vw,_32px)] relative"
            style={{
                WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,0), black 10%, black 90%, rgba(0,0,0,0))",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage:
                    "linear-gradient(to right, rgba(0,0,0,0), black 10%, black 90%, rgba(0,0,0,0))",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
            }}
        >
            <div className="flex gap-[clamp(_4px,_2vw,_24px)] justify-between">
                {scrollingTechs.map((tech, idx) => {
                    const key = techs[idx % techs.length];
                    const item = techMap[key];
                    return (
                        <div
                            key={idx}
                            className="py-2 px-4 flex items-center justify-center gap-[clamp(_2px,_2vw,_12px)] rounded-md font-bold transition-all duration-500 cursor-default"
                        >
                            {item.icon}
                            <span className="!text-[clamp(_12px,_2vw,_18px)] font-medium text-secondary">
                {item.label}
              </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
