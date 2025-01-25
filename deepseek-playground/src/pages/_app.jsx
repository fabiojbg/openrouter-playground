import { AuthProvider } from "@/context/AuthProvider";
import OpenAIProvider from "@/context/OpenAIProvider";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    if (typeof window !== "undefined") {
        var isDarkSet = localStorage.theme === "dark";
        var isThemeStored = "theme" in localStorage;
        var isDarkPrefered = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDarkSet || (!isThemeStored && isDarkPrefered)) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }
    return (<>
      <AuthProvider>
        <OpenAIProvider>
          <Component {...pageProps}/>
        </OpenAIProvider>
      </AuthProvider>
      <Analytics />
    </>);
}
