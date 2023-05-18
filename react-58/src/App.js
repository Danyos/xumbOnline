import './App.css';
import Fields from "./component/input/filed";
import TodoList from "./component/TodoList";
import {useDispatch, useSelector} from "react-redux";
import ViewPost, {Deletepost} from "./redux/post/PostsAction";
import {useEffect} from "react";
import {loadPosts} from "./redux/post/PostsSlice";

function App() {
    const fixture =useSelector(ViewPost)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(loadPosts())
    },[])
    return (
        <div className="App">
            <Fields />
            <TodoList />

            <ul>
                {
                    fixture.map(result =>(
                        <li key={result.id}>{result.title} <span onClick={()=>{
                            dispatch(Deletepost(result.id))
                        }
                        }>x</span></li>
                    ))
                }
            </ul>

        </div>

    );
}

export default App;
