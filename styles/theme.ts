// import { createTheme } from "@material-ui/core";
import { createTheme } from "@mui/material";

const themeOverrides = {
  // palette: {
  //   primary: {
  //     main: colors.grey[100],
  //     hover: colors.grey[80],
  //     disable: colors.grey[60],
  //     90: colors.grey[90],
  //     70: colors.grey[70],
  //     50: colors.grey[50],
  //     40: colors.grey[40],
  //     30: colors.grey[30],
  //     20: colors.grey[20],
  //     10: colors.grey[10],
  //   },
  //   secondary: {
  //     main: colors.lightGreen[100],
  //     hover: colors.lightGreen[80],
  //     disable: colors.lightGreen[60],
  //     40: colors.lightGreen[40],
  //     30: colors.lightGreen[30],
  //     20: colors.lightGreen[20],
  //   },
  //   success: {
  //     main: colors.green[100],
  //     hover: colors.green[80],
  //     disable: colors.green[60],
  //     70: colors.green[70],
  //     40: colors.green[40],
  //   },
  //   error: {
  //     main: colors.red[100],
  //     hover: colors.red[80],
  //     disable: colors.red[60],
  //     30: colors.red[30],
  //     20: colors.red[20],
  //     10: colors.red[10],
  //   },
  //   warning: {
  //     main: colors.yellow[100],
  //     hover: colors.yellow[80],
  //     disable: colors.yellow[60],
  //     50: colors.yellow[50],
  //     40: colors.yellow[40],
  //   },
  //   info: {
  //     main: colors.blue[100],
  //     hover: colors.blue[80],
  //     disable: colors.blue[60],
  //     secondary: colors.blue[95],
  //     90: colors.blue[90],
  //     80: colors.blue[80],
  //     70: colors.blue[70],
  //     60: colors.blue[60],
  //     50: colors.blue[50],
  //     45: colors.blue[45],
  //     40: colors.blue[40],
  //     35: colors.blue[35],
  //     30: colors.blue[30],
  //     25: colors.blue[25],
  //     20: colors.blue[20],
  //     15: colors.blue[15],
  //     10: colors.blue[10],
  //   },
  //   light: {
  //     main: colors.light[100],
  //     disable: colors.light[90],
  //     hover: colors.light[80],
  //     70: colors.light[70],
  //     60: colors.light[60],
  //     50: colors.light[50],
  //     40: colors.light[40],
  //     30: colors.light[30],
  //     20: colors.light[20],
  //     10: colors.light[10],
  //   },
  //   dark: {
  //     main: colors.dark[100],
  //     hover: colors.dark[80],
  //     disable: colors.dark[60],
  //     90: colors.dark[90],
  //     70: colors.dark[70],
  //     50: colors.dark[50],
  //     40: colors.dark[40],
  //     30: colors.dark[30],
  //     20: colors.dark[20],
  //     10: colors.dark[10],
  //   },
  //   white: {
  //     main: colors.white[100],
  //     hover: colors.white[100],
  //     disable: colors.white[100],
  //     90: colors.white[90],
  //     80: colors.white[80],
  //   },
  //   black: {
  //     main: colors.black[100],
  //     hover: colors.black[100],
  //     disable: colors.black[100],
  //     secondary: colors.black[95],
  //     90: colors.black[90],
  //     80: colors.black[80],
  //     70: colors.black[70],
  //     60: colors.black[60],
  //     50: colors.black[50],
  //     40: colors.black[40],
  //   },
  //   jobs: {
  //     main: colors.blue[40],
  //     hover: colors.blue[40],
  //     disable: colors.blue[60],
  //     100: colors.blue[100],
  //     90: colors.blue[90],
  //     70: colors.blue[70],
  //     30: colors.blue[30],
  //     20: colors.blue[20],
  //     10: colors.blue[10],
  //   },
  //   companies: {
  //     main: colors.orange[100],
  //     hover: colors.orange[100],
  //     disable: colors.orange[100],
  //   },
  //   auctions: {
  //     main: colors.purple[100],
  //     hover: colors.purple[100],
  //     disable: colors.purple[100],
  //     80: colors.purple[80],
  //     20: colors.purple[20],
  //   },
  // },
  typography: {
    fontFamily: ["Nunito", "Poppins"].join(","),
    font: {
      primary: "Nunito",
      secondary: "Poppins",
    },
    fontWeight: {
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
  breakpoints: {
    values: {
      xxs: 400,
      xs: 500,
      sm: 600,
      mdxs: 700,
      mdsm: 800,
      md: 900,
      lgxs: 1000,
      lgsm: 1100,
      lgmd: 1200,
      lg: 1280,
      xlxs: 1300,
      xl: 1546,
      xxl: 2000,
      xxxl: 2570,
      xxxxl: 2920,
    },
  },
};

// declare module "@material-ui/core/styles/createBreakpoints" {
//   interface BreakpointOverrides {
//     xxs: true;
//     xs: true;
//     sm: true;
//     mdxs: true;
//     mdsm: true;
//     md: true;
//     lgxs: true;
//     lgsm: true;
//     lgmd: true;
//     lg: true;
//     xlxs: true;
//     xl: true;
//     xxl: true;
//     xxxl: true;
//     xxxxl: true;
//   }
// }

export const theme = createTheme(themeOverrides);
