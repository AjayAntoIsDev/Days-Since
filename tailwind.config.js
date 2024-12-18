/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-a0": "#db5800",
                "primary-a10": "#e36c28",
                "primary-a20": "#ea7f43",
                "primary-a30": "#f0915d",
                "primary-a40": "#f6a477",
                "primary-a50": "#fab692",

                "surface-a0": "#121212",
                "surface-a10": "#282828",
                "surface-a20": "#3f3f3f",
                "surface-a30": "#575757",
                "surface-a40": "#717171",
                "surface-a50": "#8b8b8b",

                "surface-tonal-a0": "#251a14",
                "surface-tonal-a10": "#3a2f29",
                "surface-tonal-a20": "#504540",
                "surface-tonal-a30": "#675d58",
                "surface-tonal-a40": "#7e7672",
                "surface-tonal-a50": "#97908c",
            },
        },
    },
    plugins: [daisyui],
};
