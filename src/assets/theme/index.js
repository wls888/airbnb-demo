import { createTheme } from "@mui/material";

const theme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#00848A",
  },
  font: {
    weight: 600,
    primaryColor: "#222",
  },
  border: {
    primaryColor: "#DDD",
  },
  mixins: {
    boxShadowAnimate: `
    transition: box-shadow 250ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }
    `,
  },
};

export const materialTheme = createTheme({
  palette: {
    activePagination: {
      main: "#242424",
      contrastText: "#fff",
    },
  },
});

export default theme;
