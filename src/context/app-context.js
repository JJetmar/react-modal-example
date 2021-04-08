import { createContext } from 'react';

export default createContext({
    context: {
        appName: "Moje applikačka"
    },
    modalsDispatch: [],
    itemsDispatch: [],
    setContext: () => {}
});
