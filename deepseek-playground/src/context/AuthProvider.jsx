import React from "react";
import secureLocalStorage from "react-secure-storage";
var defaultContext = {
    token: "",
    addToken: function () { },
    clearToken: function () { },
};
var AuthContext = React.createContext(defaultContext);
export var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(""), token = _b[0], setToken = _b[1];
    React.useEffect(function () {
        var token = secureLocalStorage.getItem("open-ai-token");
        if (token) {
            setToken(token);
        }
    }, []);
    var addToken = function (token) {
        setToken(token);
        secureLocalStorage.setItem("open-ai-token", token);
    };
    var clearToken = function () {
        setToken("");
        secureLocalStorage.removeItem("open-ai-token");
    };
    var value = React.useMemo(function () { return ({ token: token, addToken: addToken, clearToken: clearToken }); }, [token]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export var useAuth = function () { return React.useContext(AuthContext); };
