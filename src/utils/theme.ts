import { extendTheme } from "@chakra-ui/react";

const colors = {
  tigerOrange: {
    50: "#FFF9F6",
    100: "#FFF3ED",
    200: "#FFDECC",
    300: "#FFC3A3",
    400: "#FFA97A",
    500: "#FF7429",
    600: "#FF5900",
    700: "#DD3722",
    800: "#AD3D00",
    900: "#842E00",
  },
  soSunny: {
    50: "#FFF8F1",
    100: "#FEECD9",
    200: "#FCE5CC",
    300: "#FCCC9C",
    400: "#FAB269",
    500: "#F99936",
    600: "#F78104",
    700: "#DD7608",
    800: "#BA6103",
    900: "#7D4003",
  },
  kindaYellow: {
    50: "#FFEDD6",
    100: "#FFEDD6",
    200: "#FFE7C1",
    300: "#FCDEB0",
    400: "#FCCC87",
    500: "#FABD5E",
    600: "FAAB36",
    700: "#D4902B",
    800: "#BA8029",
    900: "#7D571C",
  },
  teal: {
    50: "#EAF6F6",
    100: "#D4EDED",
    200: "#A6D9D9",
    300: "#7DC4C7",
    400: "#249EA0",
    500: "#008083",
    600: "#005F60",
    700: "#004747",
    800: "#003030",
    900: "#001717",
  },
  lightGrey: {
    50: "#FBFCFC",
    100: "#F8F8F9",
    200: "#F4F5F5",
    300: "#F1F2F2",
    400: "#EAEBEC",
    500: "#E3E5E5",
    600: "#DCDEDF",
    700: "#CDCFD0",
    800: "#BEC0C2",
    900: "#AFB2B3",
  },
  darkGrey: {
    50: "#A0A3A5",
    100: "#828587",
    200: "#64686A",
    300: "#464A4D",
    400: "#383B3E",
    500: "#2A2C2E",
    600: "#1C1E1F",
    700: "#151617",
    800: "#0E0F0F",
    900: "#070708",
  },
  grey: {
    700: "#797670",
    800: "#4D4B46",
    900: "#383733",
  },
  black: "#000000",
  white: "#FFFFFF",
};

const textStyles = {
  formulaHeader: {
    //styleName: 7xl Formula Header;
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: "71.34px",
    letterSpacing: "0.015rem",
  },

  headerBold: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "28.8px",
    letterSpacing: "0.015rem",
  },

  xsHeaderMedium: {
    //styleName: xs Montreal Header Medium;
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14.4px",
    letterSpacing: "0.015rem",
  },
  xsHeaderBold: {
    //styleName: xs Montreal Header Bold;
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "14.4px",
    letterSpacing: "0.015rem",
  },
  smBodyMedium: {
    //styleName: sm Body Medium;
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "21px",
    letterSpacing: "0.015rem",
  },
  mdHeaderBold: {
    //styleName: md Montreal Header Bold;
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19.2px",
    letterSpacing: "0.015rem",
  },
};

export const theme = extendTheme({
  colors: colors,
  textStyles: textStyles,
  styles: {
    global: {
      body: {
        bg: "darkGrey.600",
        color: "white",
      },
    },
  },
});

export default theme;
