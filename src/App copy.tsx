import { Info } from "lucide-react";
import "./App.css";
import Timer from "./components/Timer";

function App() {


    return (
        <>
            <div className="bg-surface-a0 w-screen min-h-screen">
                <div className="grid grid-cols-3 grid-rows-3 min-h-screen gap-12 p-12">
                    <div className="bg-surface-a10 w-full h-full rounded-3xl flex text-white flex-col justify-center">
                        <div className="flex justify-center items-start flex-col gap-6 p-12 text-start">
                            <p className="text-2xl font-bold text-primary-a30 text-opacity-90">
                                Days Since {"Earthquake"}
                            </p>
                            <Timer targetEpoch={1727589600000}></Timer>
                            <div className="flex items-center gap-2 text-white opacity-40">
                                <Info width={16} height={16}></Info>
                                <p className="text-sm text-white">
                                    <a className="underline underline-offset-1 hover:text-base transition-all cursor-pointer">
                                        Magnitude 2.1
                                    </a>{" "}
                                    earthquake 55 km ESE of Denali Park, Alaska
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-a10 w-full h-full rounded-3xl flex items-center justify-center text-white">
                        <Timer targetEpoch={1727589600000}></Timer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
