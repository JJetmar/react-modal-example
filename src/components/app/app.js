import AppContext from '../../context/app-context';
import { useState, useReducer } from 'react';

// Components
import ItemList from "../item-list/item-list";
import ModalWrapper from "../modal/modal-wrapper";
import AlertWrapper from "../alert/alert-wrapper";

// Reducers
import alertsReducer from "../../reducers/alerts-reducer";
import itemsReducer from "../../reducers/items-reducer";
import modalsReducer from "../../reducers/modals-reducer";

export default function App() {

    const [context, setContext] = useState({
        appName: "My application"
    });

    const [modals, modalsDispatch] = useReducer(modalsReducer, []);
    const [items, itemsDispatch] = useReducer(itemsReducer, []);

    const [alerts, alertsDispatch] = useReducer(alertsReducer, []);

    return (
        <AppContext.Provider value={{ context, setContext, modalsDispatch, itemsDispatch, alertsDispatch }}>
            <main className={"container mt-5"}>
                <div className={"row"}>
                    <ItemList items={items} />
                </div>
            </main>
            { modals.length > 0 && <ModalWrapper modals={ modals } /> }
            { alerts.length > 0 && <AlertWrapper alerts={ alerts } /> }
        </AppContext.Provider>
    );
}
