import React from "react";

interface BgVideoProps {
    videoUrl: string;
    opacity: number;
}

const BgVideo: React.FC<BgVideoProps> = ({ videoUrl, opacity = 0.1 }) => {
    return (
        <video
            className={
                `absolute top-0 left-0 w-full h-full object-cover -z-40 opacity-[${opacity}]`
            }
            style={{"opacity": opacity}}
            autoPlay
            loop
            muted>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default BgVideo;
