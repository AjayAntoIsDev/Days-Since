import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface GeomagneticStormProps {
    data: unknown;
}

const GeomagneticStorm: React.FC<GeomagneticStormProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const GeomagneticStormData = data.find((item) => item.title === " Geomagnetic Storm");

    return (
        <>
            <BgVideo
                videoUrl="https://cloud-71388aya7-hack-club-bot.vercel.app/0aurora_borealis_time_lapse.mp4"
                opacity={0.4}
            />
            <EventCard
                targetEpoch={GeomagneticStormData.timestamp}
                eventTitle="Geomagnetic Storm"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={GeomagneticStormData.link}>
                            {GeomagneticStormData.highlight}
                        </a>{" "}
                        {GeomagneticStormData.place}
                    </p>
                }
            />
        </>
    );
};

export default GeomagneticStorm;
