module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-sf': '#30C2EF',
        btc: '#FF2876',
        eth: '#246BFD',
        chz: '#CC0124',
        fil: '#0090FF',
        ada: 'white'
      },
      width: {
        heroImg: '700px',
        heroImgSm: '34rem',
        187: '187px',
      },
      height: {
        38: '9.5rem'

      },
      fontSize: {
        '4.5xl': '2.45rem'
      },
      lineHeight: {
        '2.9': '2.9rem'
      },
      spacing: {
        '47pc': '47%',
        '1/2': '50%',
        '13rem': '13rem',
      }
    },
  },
  plugins: [],
}
