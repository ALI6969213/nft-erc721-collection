const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.rose[100],
          to_bg: colors.rose[200],
        },
        titles: colors.blueGray[700],
        links: {
          txt: colors.blueGray[600],
          hover_txt: colors.blueGray[700],
        },
        loading_spinner: colors.blueGray[900],
        popups: {
          bg: colors.rose[400],
          txt: colors.blueGray[900],
          internal_border: colors.blueGray[900],
        },
        warning: {
          txt: colors.blueGray[800],
          bg: colors.rose[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.blueGray[800],
          bg: colors.rose[400],
          border: colors.rose[200],
          hover_txt: colors.rose[800],
          hover_bg: colors.rose[100],
          hover_border: colors.rose[200],
        },
        btn_primary: {
          txt: colors.blueGray[900],
          bg: colors.rose[300],
          border: colors.blueGray[500],
          hover_txt: colors.blueGray[800],
          hover_bg: colors.rose[400],
          hover_border: colors.blueGray[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.blueGray[600],
        txt_input: {
          txt: colors.blueGray[600],
          bg: colors.rose[300],
          border: colors.rose[200],
          focus_txt: colors.blueGray[800],
          focus_bg: colors.rose[50],
          focus_border: colors.blueGray[800],
          placeholder_txt: colors.blueGray[800],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.blueGray[800],
          bg: colors.rose[300],
        },

        // Mint widget
        token_preview: colors.rose[300],
      },
    },
  },
  variants: {},
  plugins: [],
};
