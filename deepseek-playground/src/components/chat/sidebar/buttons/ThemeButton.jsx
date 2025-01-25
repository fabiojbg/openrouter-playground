import React from "react";
import { MdColorLens } from "react-icons/md";
import ButtonContainer from "./ButtonContainer";
export default function ThemeButton(_a) {
    var _b = React.useState(false), dark = _b[0], setDark = _b[1];
    React.useEffect(function () {
        if (localStorage.theme === "dark") {
            setDark(true);
        }
        else {
            setDark(false);
        }
    }, []);
    var handleThemeChange = function () {
        document.documentElement.classList.toggle("dark");
        localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
        setDark(!dark);
    };
    return (<ButtonContainer onClick={handleThemeChange}>
      <MdColorLens />
      {dark ? "Light" : "Dark"} mode
    </ButtonContainer>);
}
