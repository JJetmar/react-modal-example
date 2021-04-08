import Toast from "./alert";

export default function AlertWrapper({ alerts = [] }) {

    return (
        <>
            { alerts.length > 0 &&
                <div className="position-fixed bottom-0 end-0 p-1">
                    <div className="position-relative">
                        <div className="toast-container top-0 end-0 p-3">
                            { alerts.map(alert => <Toast { ...alert } key={ alert.id }/>)}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};