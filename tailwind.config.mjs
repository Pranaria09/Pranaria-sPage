/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			blue: "#2D6E93",
			sky: "#47A7DD",
			white: "#FFFFFF",
			gray: "#515151",
			black: "#000000",
		},
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.03em"}],
			sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.03em"}],
			base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.03em"}],
			lg:	["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.03em"}],
			xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.03em"}],
			"2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.03em"}],
			"3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "0.03em"}],
			"4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0.03em"}],
			"5xl": ["3rem", {lineHeight: "1", letterSpacing: "0.03em"}]
		},
		extend: {},
	},
	plugins: [],
}