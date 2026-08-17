import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createSignal, Show, Suspense } from "solid-js";
import "./app.css";

import Nav from "./components/navBar/nav";
import { SidebarContext } from "./utils/context";
import { isMobile } from "./utils/mobile";

export default function App() {
  const [open, setOpen] = createSignal(false);

  return (
    <Router
      root={props => (
        <Show when={!isMobile()} fallback={
          <div class='w-screen h-screen flex items-center justify-center flex-wrap'>
            <p class='text-center'>Mobile support not available<br></br>Check back when it's been updated</p>
          </div>
        }>
          <SidebarContext.Provider value={{ open, setOpen }}>
            <Nav></Nav>
            <Suspense>{props.children}</Suspense>
          </SidebarContext.Provider>
        </Show>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
