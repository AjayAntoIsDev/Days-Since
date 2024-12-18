import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface TsunamiProps {
    data: unknown;
}

const Tsunami: React.FC<TsunamiProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const TsunamiData = data.find((item) => item.title === "Tsunami");

    return (
        <>
            <BgVideo videoUrl="https://cloud-tz9ldp5n8-hack-club-bot.vercel.app/0tsunami_waves_in_japan.mp4" opacity={0.1}/>
            <EventCard
                targetEpoch={TsunamiData.timestamp}
                eventTitle="Tsunami"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={TsunamiData.link}>
                            {TsunamiData.highlight}
                        </a>{" "}
                        {TsunamiData.place}
                    </p>
                }
            />
        </>
    );
};

export default Tsunami;
