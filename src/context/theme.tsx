import { createTheme } from "@mui/material";

// const mint = {
//   50: "#F9FEFD",
//   100: "#F2FBF9",
//   200: "#DDF9F2",
//   300: "#C8F4E9",
//   400: "#B3ECDE",
//   500: "#9CE0D0",
//   600: "#7ECFBD",
//   700: "#4CBBA5",
//   800: "#86EAD4",
//   900: "#7DE0CB",
//   A100: "#027864",
//   A200: "#16433C",
// };

const ruby = {
  50: "#FFFCFD",
  100: "#FFF7F8",
  200: "#FEEAED",
  300: "#FFDCE1",
  400: "#FFCED6",
  500: "#F8BFC8",
  600: "#EFACB8",
  700: "#E592A3",
  800: "#E54666",
  900: "#DC3B5D",
  A100: "##FEF7F9", // Crimson
  A200: "##FFE9F0",
  A400: "#FACEDD",
  A700: "#E093B2",
};

const teal = {
  50: "#FAFEFD",
  100: "#F3FBF9",
  200: "#E0F8F3",
  300: "#CCF3EA",
  400: "#B8EAE0",
  500: "#A1DED2",
  600: "#83CDC1",
  700: "#53B9AB",
  800: "#12A594",
  900: "#0D9B8A",
  A100: "#F3FBF9", // Jade
  A200: "#CCF3EA",
  A400: "#B8EAE0",
  A700: "#53B9AB",
};

const cyan = {
  50: "#FAFDFE",
  100: "#F2FAFB",
  200: "#DEF7F9",
  300: "#CAF1F6",
  400: "#B5E9F0",
  500: "#9DDDE7",
  600: "#7DCEDC",
  700: "#3DB9CF",
  800: "#00A2C7",
  900: "#0797B9",
  A100: "#F3FBF9", // Teal
  A200: "#E0F8F3",
  A400: "#B8EAE0",
  A700: "#53B9AB",
};

const sky = {
  50: "#F9FEFF",
  100: "#F1FAFD",
  200: "#E1F6FD",
  300: "#D1F0FA",
  400: "#BEE7F5",
  500: "#A9DAED",
  600: "#8DCAE3",
  700: "#60B3D7",
  800: "#7CE2FE",
  900: "#74DAF8",
  A100: "#F4FAFF", // Blue
  A200: "#E6F4FE",
  A400: "#C2E5FF",
  A700: "#5EB1EF",
};

const tomato = {
  50: "#FFFCFC",
  100: "#FFF8F7",
  200: "#FEEBE7",
  300: "#FFDCD3",
  400: "#FFCDC2",
  500: "#FDBDAF",
  600: "#F5A898",
  700: "#EC8E7B",
  800: "#E54D2E",
  900: "#DD4425",
  A100: "#FFF7F7", // Red
  A200: "#FEEBEC",
  A400: "#FFCDCE",
  A700: "#EB8E90",
};

const pink = {
  50: "#FFFCFE",
  100: "#FEF7FB",
  200: "#FEE9F5",
  300: "#FBDCEF",
  400: "#F6CEE7",
  500: "#EFBFDD",
  600: "#E7ACD0",
  700: "#DD93C2",
  800: "#D6409F",
  900: "#CF3897",
  A100: "#FDF7FD", // Plum
  A200: "#FBEBFB",
  A400: "#F2D1F3",
  A700: "#CF91D8",
};

const mauve = {
  50: "#FDFCFD",
  100: "#FAF9FB",
  200: "#F2EFF3",
  300: "#EAE7EC",
  400: "#E3DFE6",
  500: "#DBD8E0",
  600: "#D0CDD7",
  700: "#BCBAC7",
  800: "#8E8C99",
  900: "#84828E",
  A100: "#F9F9FB", // Slate
  A200: "#F0F0F3",
  A400: "#E0E1E6",
  A700: "#B9BBC6",
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      ...cyan,
    },
    success: {
      ...teal,
    },
    secondary: {
      ...ruby,
    },
    info: {
      ...sky,
    },
    error: {
      ...tomato,
    },
    warning: {
      ...pink,
    },
    grey: {
      ...mauve,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI (Custom)"',
      "Roboto",
      '"Helvetica Neue"',
      '"Open Sans (Custom)"',
      "system-ui",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h6: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.0025em",
    },
    h5: {
      fontSize: "14px",
      letterSpacing: 0,
      lineHeight: "20px",
    },
    h4: {
      fontSize: "16px",
      letterSpacing: 0,
      lineHeight: "24px",
    },
    h3: {
      fontSize: "18px",
      letterSpacing: "-0.0025em",
      lineHeight: "26px",
    },
    h2: {
      fontSize: "20px",
      letterSpacing: "-0.005em",
      lineHeight: "28px",
    },
    h1: {
      fontSize: "24px",
      letterSpacing: "-0.00625em",
      lineHeight: "30px",
    },
    button: {
      fontStyle: "normal",
    },
    caption: {
      // Helper text.
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.0025em",
      fontStyle: "italic",
    },
  },
  spacing: [0, 4, 8, 12, 16, 24, 32, 40, 48, 64],
  components: {},
});

export default theme;
