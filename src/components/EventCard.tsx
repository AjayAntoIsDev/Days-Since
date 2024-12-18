import React from "react";
import { Info } from "lucide-react";
import Timer from "./Timer";

interface EventCardProps {
    targetEpoch: number;
    eventTitle: string;
    infoContent: React.ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({
    targetEpoch,
    eventTitle,
    infoContent,
}) => {
    return (
        <div className="w-screen min-h-screen">
            <div className="flex items-center justify-center min-h-screen gap-12 p-12">
                <div className="bg-[#313131] w-auto h-full rounded-3xl flex text-white flex-col justify-center">
                    <div className="flex justify-center items-start flex-col gap-6 p-12 text-start">
                        <p className="text-2xl font-bold text-primary-a20 text-opacity-90">
                            Days Since {eventTitle}
                        </p>
                        <Timer targetEpoch={targetEpoch}></Timer>
                        <div className="flex items-center gap-2 text-white opacity-50">
                            <Info width={16} height={16} />
                            {infoContent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
