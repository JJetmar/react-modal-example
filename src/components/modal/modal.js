import { useContext, useCallback } from "react";
import appContext from "../../context/app-context";

export default function Modal({ id, title, content, footer, active = false, disposable = false }) {
    const { modalsDispatch } = useContext(appContext);

    const dispose = useCallback(() => {
        modalsDispatch({ type: "delete", payload: { id }});
    }, [id, modalsDispatch]);

    return (
        <div
            className="modal fade show"
            style={{display: "block", zIndex: active ? null : 1039 }}
            onClick={ () => { disposable && modalsDispatch({type: "delete", payload: { id }})}}
        >
            <div className="modal-dialog" onClick={(e) => { e.stopPropagation() }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ title }</h5>
                        { disposable && <button className="btn-close" onClick={() => { dispose() }} /> }
                    </div>
                    <div className="modal-body">
                        { content }
                    </div>
                    <div className="modal-footer">
                        { typeof footer === "function" ? footer({ dispose }) : footer}
                    </div>
                </div>
            </div>
        </div>
    );
};