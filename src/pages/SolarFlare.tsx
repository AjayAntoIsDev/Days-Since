import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface SolarFlareProps {
    data: unknown;
}

const SolarFlare: React.FC<SolarFlareProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const SolarFlareData = data.find((item) => item.title === "Solar Flare");

    return (
        <>
            <BgVideo
                videoUrl="https://cloud-ehdg4z92c-hack-club-bot.vercel.app/0fiery_looping_rain_on_the_sun__1_.mp4"
                opacity={0.3}
            />
            <EventCard
                targetEpoch={SolarFlareData.timestamp}
                eventTitle="Solar Flare"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={SolarFlareData.link}>
                            {SolarFlareData.highlight}
                        </a>
                    </p>
                }
            />
        </>
    );
};

export default SolarFlare;
