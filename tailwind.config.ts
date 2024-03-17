import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "selector",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				card: "linear-gradient(180deg, #0447cc, transparent)",
				card__dark: "linear-gradient(180deg, rgba(255,255,255,0.7), transparent)",
			},
		},
		colors: {
			primary: "#0447cc",
			secondary: "#010e1d",
			white: "#fff",
		},
		screens: {
			xs: { max: "480px" },
			mobile: { min: "200px", max: "480px" },
			sm: { max: "768px" },
			tablet: { min: "481px", max: "768px" },
			md: "769px",
			laptop: { min: "769px", max: "1024px" },
		},
	},
	plugins: [],
};
export default config;



