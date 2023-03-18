import boxStyle from './style.module.css'
export const a=7
function BoxFirst({title,description,offer}) {


    return (
        <>
            {title && description && <div className={boxStyle.one}>
                <h2 className={boxStyle.oneh2}>{title} </h2>
                <p className={boxStyle.onep}>{description} </p>
                <span>{offer}</span>
            </div>}
        </>
    )
}

export default BoxFirst;
