/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: colors.slate,
                blue: colors.blue,
                cyan: colors.cyan,
                purple: colors.purple,
            },
            animation: {
                float: "float 3s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "rotate-slow": "rotate-slow 20s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1", filter: "brightness(1)" },
                    "50%": { opacity: "0.8", filter: "brightness(1.2)" },
                },
                "rotate-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
            },
        },
    },
    plugins: [],
}