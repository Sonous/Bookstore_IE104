/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Inter', 'sans-serif'],
            },
            colors: { 'primary-color': '#228B22', 'main-bg-color': '#f0f0f0', 'outside-menu-bg': 'rgba(0, 0, 0, 0.7)' },
            width: { 'main-width': '1200px' },
        },
    },
    plugins: [],
};
