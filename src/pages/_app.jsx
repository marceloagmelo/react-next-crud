import { GlobalProvider } from "@/contexts/GlobalContext";

export default function App({ Component, pageProps }) {

  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>

  );
}
