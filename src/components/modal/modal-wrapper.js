import { useEffect, useCallback, useContext, useState } from "react";
import Modal from "./modal";
import appContext from "../../context/app-context";

export default function ModalWrapper({ modals = [] }) {

    const [activeModal, setActiveModal] = useState(null);
    const { modalsDispatch } = useContext(appContext);

    const disposeActive = useCallback((e) => {
        if (!activeModal) return;
        const { id } = activeModal;

        switch (e.key) {
            case "Escape":
                modalsDispatch({ type: "delete", payload: { id }});
                break;
            default:
        }
    }, [activeModal, modalsDispatch]);

    useEffect(() => {
        if (!activeModal || !activeModal.disposable) return;
        document.addEventListener('keydown', disposeActive);

        return () => {
            document.removeEventListener('keydown', disposeActive);
        }
    }, [activeModal, disposeActive])

    useEffect(() => {
        setActiveModal(modals.length ? modals[modals.length -1] : null)
    }, [modals])

    return (
        <>
            <div className="modal-backdrop fade show" />
            { activeModal && modals.map((context) => {
                const modalAttributes = typeof context === "function" ? context() : context;
                const { id } = modalAttributes;
                return <Modal key={ id } { ...modalAttributes } active={ id === activeModal.id } />;
            })}
        </>
    );
};