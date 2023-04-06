function Count({incriment}) {
    console.log(incriment)
    return (
        <>
                <button onClick={()=>incriment()}>+</button>
                <button onClick={()=>incriment(1,'-')}>-</button>

        </>
    );
}

export default Count;