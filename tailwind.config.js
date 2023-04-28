/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.vue'],
    theme: {
        extend: {
            fontFamily: {
                'euclid-circular-regular': ['EuclidCircularA-Regular', 'sans-serif'],
                'euclid-circular-medium': ['EuclidCircularA-Medium', 'sans-serif'],
                'euclid-circular-bold': ['EuclidCircularA-Bold', 'sans-serif'],
                'euclid-circular-semibold': ['EuclidCircularA-SemiBold', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
