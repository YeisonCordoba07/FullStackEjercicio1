import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "./layout";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </SessionProvider>
  );
};

export default App;
