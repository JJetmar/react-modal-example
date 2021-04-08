import { useState, useRef, useCallback, useEffect, useContext } from "react";
import appContext from "../../context/app-context";
import uuid from 'react-uuid'

export default function ItemList({items}) {

    const [isAddNewItemMode, setIsAddNewItemMode] = useState(false);
    const [activeTabId, setActiveTabId] = useState(null);
    const [activeTabStack, setActiveTabStack] = useState([]);
    const { modalsDispatch, itemsDispatch, alertsDispatch } = useContext(appContext);

    const addItemButton = useRef(null);

    const addNewItem = useCallback((e) => {
        const name = e.target.value;
        if (name) {
            const id = uuid();
            console.log("ADDING", {id, name});
            itemsDispatch({type: "add", payload: {id, name}});
            alertsDispatch({type: "add", payload: {id, content: `Tab "${name}" was added!`, type: "success"}});
            setActiveTabId(id);
        }
        setIsAddNewItemMode(false);
    }, [items]);

    const removeItem = useCallback((id) => {
        itemsDispatch({type: "remove", payload: {id}});
        const newActiveTabStack = activeTabStack.filter(tab => tab !== id);

        setActiveTabStack(newActiveTabStack);

        if (id === activeTabId ) {
            setActiveTabId(newActiveTabStack[newActiveTabStack.length - 1]);
        }

        const deletedTab = items.find(tab => tab.id === id)
        alertsDispatch({type: "add", payload: {id, content: `Tab "${deletedTab.name}" was deleted!`, type: "danger"}});
    }, [activeTabId])

    const newItemKeyPress = useCallback((e) => {
        switch (e.key) {
            case 'Esc':
            case 'Escape':
                e.target.value = "";
            case 'Enter':
                addItemButton.current.focus();
                e.preventDefault();
                break;
        }
    }, [addItemButton])

    useEffect(() => {
        if (!activeTabId) return;

        const newActiveTabStack = activeTabStack.filter(itemId => itemId !== activeTabId);
        newActiveTabStack.push(activeTabId)
        setActiveTabStack(newActiveTabStack);
    }, [activeTabId])

    const activeTab = items.find(i => i.id === activeTabId);

    return (
        <div>
            <ul className={"nav mb-2"}>
                { items.map(({id, name}) => (
                <li className="nav-item me-2 mb-2" key={id}>
                    <div className="btn-group mr-2">
                        <button className={`btn btn-sm btn-${activeTabId === id ? "primary" : "secondary"}`}
                                onClick={() => { setActiveTabId(id) }}
                        >{name}</button>
                        <button className={"btn btn-sm btn-danger"} onClick={() => {
                            modalsDispatch({ type: "add", payload: {
                                disposable: true,
                                title: `Delete "${name}"?`,
                                content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at cursus dolor. Proin placerat elementum ex id ornare. Nullam nec finibus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis interdum blandit sollicitudin. Curabitur ac sem eleifend, tincidunt neque sit amet, pellentesque odio.</p>, //`Would you like to delete item "${name}"?`,
                                footer: ({dispose}) => <>
                                    <button className={"btn btn-danger"} onClick={ () => { removeItem(id); dispose() }}>Delete</button>
                                    <button className={"btn btn-secondary"} autoFocus={true} onClick={ () => { dispose() }}>Cancel</button>
                                    <button className={"btn btn-secondary"} onClick={ () => {
                                        modalsDispatch({ type: "add", payload: {
                                            title: "test1",
                                            content: <>LOL <input/></>,
                                            footer: ({dispose}) => <button onClick={() => dispose() } className={"btn btn-primary"}>A DOST!</button>
                                        }});
                                    }}>Novy</button>
                                </>
                            }})
                        }}>&#128473;</button>
                    </div>
                </li>
                )) }
                { isAddNewItemMode &&
                <li className="nav-item me-2 mb-2" key={"new-item"}>
                    <input
                        className={"form-control form-control-sm"}
                        type={"text"}
                        placeholder={"New tab name"}
                        autoFocus={true}
                        onBlur={addNewItem}
                        onKeyDown={newItemKeyPress}
                    />
                </li>
                }
                <li className="nav-item me-2 mb-2" key={"new-item-button"}>
                    <button
                        ref={addItemButton}
                        className={"btn btn-sm btn-success"}
                        onClick={() => {setIsAddNewItemMode(true)}}>+ Add tab</button>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-panel">
                    { activeTab &&
                        <textarea
                            className={"form-control"}
                            rows={8}
                            placeholder={`Content of tab "${activeTab.name}".`}
                            onChange={(e) => {
                                itemsDispatch({ type: "edit", payload: { ...activeTab, content: e.target.value }})
                            }}
                           value={activeTab?.content}
                        />
                    }
                </div>
            </div>
        </div>
    );
};
