export { render };
export { passToClient };

import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { createApp } from "./app";
import logoUrl from "./logo.svg";

const passToClient = ["pageProps", "routeParams"];

async function render(pageContext) {
  const { Page } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(pageContext);
  const appHtml = await renderToString(app);

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) || "App using Vite + Vike";

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
