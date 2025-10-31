/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: { flexbox: "no-2009" },
      stage: 3,
      features: { "custom-properties": false },
    },
    "@csstools/postcss-global-data": {
      files: ["./src/styles/breakpoints.css"],
    },
    "postcss-custom-media": {},
    cssnano: { preset: "default" },
  },
};

export default config;
