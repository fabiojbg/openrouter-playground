import React from "react";
var PlaygroundContext = React.createContext({
    showConversations: false,
    setShowConversations: function (show) { },
    toggleShowConversations: function () { },
});
export default function PlaygroundProvider(props) {
    var _a = React.useState(false), showConversations = _a[0], setShowConversations = _a[1];
    var toggleShowConversations = function () {
        setShowConversations(!showConversations);
    };
    var value = React.useMemo(function () { return ({
        showConversations: showConversations,
        setShowConversations: setShowConversations,
        toggleShowConversations: toggleShowConversations,
    }); }, [showConversations]);
    return <PlaygroundContext.Provider {...props} value={value}/>;
}
export var usePlayground = function () { return React.useContext(PlaygroundContext); };
