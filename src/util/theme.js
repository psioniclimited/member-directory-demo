export default {
  palette: {
    primary: {
      light: "#b47cff",
      main: "#7c4dff",
      dark: "#3f1dcb",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff5983",
      main: "#f50057",
      dark: "#bb002f",
      contrastText: "#fff",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
};
