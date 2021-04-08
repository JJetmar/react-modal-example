import AppContext from '../../context/app-context';
import { useContext } from "react";

export default function SubComponent() {

    const { context, setContext } = useContext(AppContext);
    const { appName } = context;
    return (
        <>
            <div className={"row mt-5"}>
                <input type={"text"} onChange={(e) => { setContext({ appName: e.target.value}) }} />
            </div>
            <div>
                Sub komponenta:
                { appName }
            </div>
        </>
    );
};
