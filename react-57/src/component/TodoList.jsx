import {useSelector} from "react-redux";

const TodoList = () => {

    const todo=useSelector( (state)=>state.todo)
    console.log(todo)
    return (
        <>

            <table border={1} width='50%'>
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                </thead>
                <tbody>
                {todo.map(res=>(
                    <tr key={res.id}>
                        <td>{res.id}</td>
                        <td>{res.title}</td>
                        <td>{res.body}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default TodoList