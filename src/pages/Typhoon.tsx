import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface TyphoonProps {
    data: unknown;
}

const Typhoon: React.FC<TyphoonProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const TyphoonData = data.find((item) => item.title === "Typhoon");

    return (
        <>
            <BgVideo
                videoUrl="https://cloud-mgf9t6qb7-hack-club-bot.vercel.app/0tornado_footage_1280x720.mp4"
                opacity={0.4}
            />
            <EventCard
                targetEpoch={TyphoonData.timestamp}
                eventTitle="Typhoon"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={TyphoonData.link}>
                            {TyphoonData.highlight}
                        </a>{" "}
                        {TyphoonData.place}
                    </p>
                }
            />
        </>
    );
};

export default Typhoon;
