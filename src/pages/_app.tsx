import "../static/styles/style.scss";

import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api.code-challenge.ze.delivery/public/graphql",
});
function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
