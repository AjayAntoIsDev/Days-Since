import React from "react";
import BgVideo from "../components/BgVideo";
import EventCard from "../components/EventCard";

interface AsteroidProps {
    data: unknown;
}

const Asteroid: React.FC<AsteroidProps> = ({data}) => {
    // @ts-expect-error `data` is of type `unknown`
    const AsteroidData = data.find((item) => item.title === "1 Kiloton Asteroid Impact"
    );

    console.log(AsteroidData)
    return (
        <>
            <BgVideo
                videoUrl="https://cloud-d1yy23wqx-hack-club-bot.vercel.app/0meteor_comet_asteroid_video.mp4"
                opacity={0.4}
            />
            <EventCard
                targetEpoch={AsteroidData.timestamp/1000}
                eventTitle="Asteroid Impact"
                infoContent={
                    <p className="text-sm text-white">
                        <a
                            className="underline underline-offset-1 hover:text-base transition-all cursor-pointer"
                            href={AsteroidData.link}>
                            {AsteroidData.highlight}
                        </a>{" "}
                        {AsteroidData.place}
                    </p>
                }
            />
        </>
    );
};

export default Asteroid;
