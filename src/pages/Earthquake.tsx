import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface EarthquakeProps {
    data: unknown;
}

const Earthquake: React.FC<EarthquakeProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const earthquakeData = data.find((item) => item.title === "Earthquake");

    return (
        <>
            <BgVideo videoUrl="https://cloud-5z8cqlrs1-hack-club-bot.vercel.app/0earthquake_rubble_drone_video.mp4" opacity={0.1}/>
            <EventCard
                targetEpoch={earthquakeData.timestamp}
                eventTitle="Earthquake"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={earthquakeData.link}>
                            {earthquakeData.highlight}
                        </a>{" "}
                        {earthquakeData.place}
                    </p>
                }
            />
        </>
    );
};

export default Earthquake;
