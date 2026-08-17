// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import site from "./config/site";

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
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
