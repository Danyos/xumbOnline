import {InfoContext} from "../../createContext";
import {useContext} from "react";

function InformationAvatar() {
    const {avatar}=useContext(InfoContext)
    return (
        <>
            {avatar&& <img src={avatar} />}


        </>
    );
}

export default InformationAvatar;