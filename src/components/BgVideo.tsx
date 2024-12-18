import React from "react";

interface BgVideoProps {
    videoUrl: string;
    opacity?: number;
    isActive?: boolean;
}

const BgVideo: React.FC<BgVideoProps> = ({
    videoUrl,
    opacity = 0.1,
    isActive = true,
}) => {
    return (
        <div
            className={`
                absolute inset-0 transition-opacity duration-500
                ${isActive ? "opacity-100" : "opacity-0"}
            `}
            data-swiper-parallax={"-50%"}>
            <video
                className="absolute inset-0 w-full h-full object-cover -z-40"
                style={{ opacity }}
                autoPlay
                loop
                muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BgVideo;
