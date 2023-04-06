import InformationText from "./InformationText";
import {InfoContext} from "../../createContext";



function Information() {
    return (

            <InfoContext.Consumer>
                {
                    ({title})=>(
                        <>
                            <h1>{title??'datark'}</h1>
                            <InformationText/>
                        </>
                    )
                }
            </InfoContext.Consumer>
    );
}
export default Information;