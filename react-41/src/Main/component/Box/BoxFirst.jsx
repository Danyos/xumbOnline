import boxStyle from './style.module.css'
export const a=7
function BoxFirst({title,description,price,brand}) {



    return (
        <>
            {title && description &&
                <div className={boxStyle.one}>
                <h2 className={boxStyle.oneh2}>{title} </h2>
                <p className={boxStyle.onep}>{description} </p>
                <span>{price}</span>
                <span>{brand}</span>
            </div>
            }
        </>
    )
}

export default BoxFirst;
