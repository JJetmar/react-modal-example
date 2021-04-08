import { useContext, useCallback, useEffect } from "react";
import appContext from "../../context/app-context";

export default function Alert({ id, type, content }) {

    const { alertsDispatch } = useContext(appContext);

    const remove = useCallback(() => {
        alertsDispatch({ type: "delete", payload: { id }});
    }, [id]);

    useEffect(() => {
        setTimeout(() => { remove() }, 10500);
    }, [])

    return (
        <div className={`toast align-items-center text-white bg-primary border-0 show bg-${type}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    { content }
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => { remove() }} />
            </div>
        </div>
    );
};