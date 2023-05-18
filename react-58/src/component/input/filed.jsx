import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/todo/TodoAction";


const Fields = () => {

    const dispatch = useDispatch()

    function getField(e) {
        e.preventDefault()
        let title = e.target.elements.title
        let body = e.target.elements.body
        console.log(title)
        // ....validate
            dispatch(addTodo({
                title:title.value,
                body:body.value
            }))



    }

    return (
        <form onSubmit={getField}>
            <div>
                <label>Title</label>
                <br/>
                <input type="text" name='title'/>
            </div>
            <div>
                <label>Body main context</label>
                <br/>
                <textarea name='body'></textarea>
            </div>

            <button type="submit">Send</button>
        </form>
    )
}
export default Fields