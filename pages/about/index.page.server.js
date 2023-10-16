export { onBeforeRender };

import fetch from "node-fetch";

async function onBeforeRender(pageContext) {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  const response = await fetch("https://blogyl.xyz/blogApi/article");
  let movies = await response.json();

  // We make `movies` available as `pageContext.pageProps.movies`
  const pageProps = { movies };
  return {
    pageContext: {
      pageProps,
    },
  };
}
