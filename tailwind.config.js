module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/img/bg-1.jpg')",
       },
       height: theme => ({
        "112": "28rem",
        "128": "32rem"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
