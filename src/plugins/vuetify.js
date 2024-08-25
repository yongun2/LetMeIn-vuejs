/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from "vuetify/util/colors";
// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#2C3E50",
          secondary: "#838080",
          success: "#27AE60",
          info: "#2980B9",
          warning: "#C0392B",
          danger: "#E74C3C",
          light: "#FFFFFF",
          dark: "#13131F",
          "bg-primary": "#2C3E50",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#1E1E2F",
          secondary: "#DCDCDC",
          success: "#2ECC71",
          info: "#3498DB",
          warning: "#FFF82B",
          danger: "#E74C3C",
          light: "#F9F8FF",
          dark: "#838080",
        },
      },
    },
  },
});
