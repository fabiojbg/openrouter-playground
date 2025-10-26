import React, { PropsWithChildren } from "react";

const defaultContext = {
  token: "",
  addToken: () => {},
  clearToken: () => {},
  loadingAuth: true, // New: Add loading state for authentication
};

const AuthContext = React.createContext<{
  token: string;
  addToken: (token: string) => void;
  clearToken: () => void;
  loadingAuth: boolean; // New: Add loadingAuth to context type
}>(defaultContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = React.useState("");
  const [loadingAuth, setLoadingAuth] = React.useState(true); // New: Manage loading state

  React.useEffect(() => {
    // Simulate async loading or actual secureLocalStorage access
    // For now, it's synchronous but we keep `loadingAuth` for conceptual consistency
    // and if secureLocalStorage ever becomes asynchronous or more complex.
    const loadToken = () => {
      try {
        const storedToken = localStorage.getItem("open-ai-token") as string;
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Error loading token from local storage:", error);
      } finally {
        setLoadingAuth(false);
      }
    };
    loadToken();
  }, []);

  const addToken = (token: string) => {
    setToken(token);
    localStorage.setItem("open-ai-token", token);
  };

  const clearToken = () => {
    setToken("");
    localStorage.removeItem("open-ai-token");
  };

  const value = React.useMemo(() => ({ token, addToken, clearToken, loadingAuth }), [token, loadingAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
