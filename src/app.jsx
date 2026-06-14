import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createSignal, Suspense } from "solid-js";
import "./app.css";

import Nav from "./components/navBar/nav";
import { SidebarContext } from "./utils/context";

export default function App() {
  const [open, setOpen] = createSignal(false);

  return (
    <Router
      root={props => (
        <>
          <SidebarContext.Provider value={{ open, setOpen }}>
            <Nav></Nav>
            <Suspense>{props.children}</Suspense>
          </SidebarContext.Provider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
