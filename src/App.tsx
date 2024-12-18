import React, { useEffect, useState } from "react";
import "./App.css";
import Earthquake from "./pages/Earthquake";
import Tsunami from "./pages/Tsunami";

interface EarthquakeData {
    // Define the structure of your JSON data here, for example:
    id: string;
    date: string;
    location: string;
    magnitude: number;
}

const App: React.FC = () => {
    const [data, setData] = useState<EarthquakeData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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

    return (
        <>
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
                    <Earthquake data={data} />
                    <Tsunami data={data} />
                </>
            )}
        </>
    );
};

export default App;
