import React from "react";
import BgVideo from "../components/BgVideo";
import { ChevronRight } from "lucide-react";

interface StartProps {
    swiperRef: any;
}
const Start: React.FC<StartProps> = ({swiperRef}) => {
    return (
        <>
            <BgVideo
                videoUrl="https://cloud-m4ixqxd7c-hack-club-bot.vercel.app/0submerged_material_changes_video.mp4"
                opacity={0.08}
            />
            <div className="w-screen min-h-screen ">
                <div className="flex items-center justify-center min-h-screen gap-12 p-12">
                    <div className="bg-[#313131] md:w-[40%] h-full rounded-3xl flex text-white flex-col justify-center">
                        <div className="flex justify-center items-start flex-col gap-6 p-12 text-start">
                            <p className="text-3xl font-bold text-primary-a20 text-opacity-90">
                                Days Since Incident
                            </p>
                            <div className="gap-2 text-white">
                                <p className="text-xl font-semibold italic">
                                    ‘Time heals all wounds, but it never
                                    forgets.’
                                </p>

                                <button className="flex mt-2 underline underline-offset-3 text-sm font-light text-gray-100 items-center cursor-pointer" onClick={() => swiperRef.current.swiper.slideNext()}>Swipe to continue <ChevronRight className="w-5"></ChevronRight></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Start;
