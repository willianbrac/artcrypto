module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins'],
      body: ['Roboto'],
    },
    extend: {
      backgroundImage: {
        'ipad-mini': 'url(/public/img/ipad-mini.png)',
        'nft-example': 'url(/public/img/nft-example.png)',
        'author-example': 'url(/public/img/author-example.png)',
      },
      colors: {
        primary: 'hsl(198,64%,62%)',
        'primary-dark': 'hsl(198,64%,42%)',
        secondary: 'hsl(360,89%,69%)',
      },
    },
  },
  plugins: [],
};
