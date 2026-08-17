// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import site from "./config/site";
import { Show } from "solid-js";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang={site.lang} class='dark scrollbar'>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{site.title}</title>
          <meta name="description" content={site.description} />

          {/* <link rel="icon" href="/favicon.ico" /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
          {/* <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"></link> */}
          
          {assets}
        </head>
        <body>
          <Show when={!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))} fallback={
            <div class='w-screen h-screen flex items-center justify-center flex-wrap'>
              <p class='text-center'>Mobile support not available<br></br>Check back when it's been updated</p>
            </div>
          }>
            <div id="app">{children}</div>
          </Show>
          {scripts}
        </body>
      </html>
    )}
  />
));
