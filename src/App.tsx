import { Toaster } from "react-hot-toast";

import { Router } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
  return (
    <>
      <Toaster position="top-right" />
      <GlobalStyle />
      <Router />
    </>
  )
}
