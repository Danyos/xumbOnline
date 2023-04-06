import Count from "./Count";

function MyCounter({incriment}) {

    return (
        <>
            <Count incriment={incriment}/>
            <button onClick={()=>incriment(2,'%')}>2x</button>
        </>
    );
}

export default MyCounter;


