import { AuthProvider } from "@/context/AuthProvider";
import OpenAIProvider from "@/context/OpenAIProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    document.documentElement.classList.add("dark");
  }

  return (
    <>
      <AuthProvider>
        <OpenAIProvider>
          <Component {...pageProps} />
        </OpenAIProvider>
      </AuthProvider>
      <Analytics />
    </>
  );
}
