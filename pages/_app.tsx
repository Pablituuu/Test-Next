import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as LayerhubProvider } from "@layerhub-pro/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LayerhubProvider>
        <Component {...pageProps} />
      </LayerhubProvider>
    </ChakraProvider>
  );
}
