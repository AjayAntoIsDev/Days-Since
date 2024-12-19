import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface VolcanicEruptionProps {
    data: unknown;
}

const VolcanicEruption: React.FC<VolcanicEruptionProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const VolcanicEruptionData = data.find((item) => item.title === "Volcanic Eruption"
    );

    return (
        <>
            <BgVideo
                videoUrl="https://cloud-gi5a3i3xw-hack-club-bot.vercel.app/0volcano_erupting_1280x720.mp4"
                opacity={0.3}
            />
            <EventCard
                targetEpoch={VolcanicEruptionData.timestamp}
                eventTitle="Volcanic Eruption"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={VolcanicEruptionData.link}>
                            {VolcanicEruptionData.highlight}
                        </a>
                    </p>
                }
            />
        </>
    );
};

export default VolcanicEruption;
