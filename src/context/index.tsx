import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "./theme";

const ContextProviders = (props: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ContextProviders;
