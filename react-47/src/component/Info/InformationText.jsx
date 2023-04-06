import InformationAvatar from "./InformationAvatar";
import {InfoContext} from "../../createContext";
import {useContext} from "react";


function InformationText() {
    const {desc}=useContext(InfoContext)

    return (
        <>

            {desc&&<p>{desc}</p>}
            <InformationAvatar/>
        </>
    );
}

export default InformationText;