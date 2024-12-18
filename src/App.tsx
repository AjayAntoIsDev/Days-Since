import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Earthquake from "./pages/Earthquake";
import Tsunami from "./pages/Tsunami";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import {
    HashNavigation,
    Pagination,
    Navigation,
} from "swiper/modules";

// @ts-expect-error stupid imports
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";



interface EarthquakeData {
    id: string;
    date: string;
    location: string;
    magnitude: number;
}

const App: React.FC = () => {
    const [data, setData] = useState<EarthquakeData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://days-since-incident-j7zs2.ondigitalocean.app/"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData: EarthquakeData[] = await response.json();
                setData(jsonData);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleMouseWheel = (e: React.WheelEvent) => {
        if (!swiperRef.current) return;

        if (e.deltaY > 0) {
            swiperRef.current.swiper.slideNext();
        } else {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToPrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div onWheel={handleMouseWheel} className="relative h-screen">
            {loading && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <div className="flex justify-center items-center h-screen">
                            <span className="loading loading-spinner loading-lg text-primary-a20"></span>
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-red-500">
                            Error
                        </h3>
                        <p className="py-4">{error}</p>
                        <div className="modal-action">
                            <button
                                className="btn btn-error"
                                onClick={() => setError(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {!loading && !error && data && (
                <>
                    <Swiper
                        ref={swiperRef}
                        modules={[HashNavigation, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) =>
                            setCurrentSlide(swiper.activeIndex)
                        }>
                        <SwiperSlide>
                            <Earthquake data={data} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tsunami data={data} />
                        </SwiperSlide>
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                        <button
                            onClick={goToPrevSlide}
                            className="text-surface-a50 disabled:text-surface-a20"
                            disabled={currentSlide === 0}>
                            <ChevronLeft />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                        <button
                            onClick={goToNextSlide}
                            className="text-surface-a50 disabled:text-surface-a20"
                            disabled={currentSlide === 1}>
                            <ChevronRight />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
