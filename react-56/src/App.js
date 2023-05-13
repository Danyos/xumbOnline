import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch= useDispatch()
  let post=useSelector(function (state){
    return state.MainPost
  })
  return (
    <div className="App">
      <h2>{post.title}</h2>
        <p>{post.description}</p>

      <input type="text" onChange={(e)=>dispatch({
        type:'edit',
        payload:{
          title:e.target.value,
          description:post.description
        }
      })}
           value={post.title}
      />
      <textarea onChange={(e)=>dispatch({
        type:'edit',
        payload:{
          title:post.title,
          description:e.target.value,
        }
    })}>
        {post.description}
      </textarea>
    </div>
  );
}

export default App;
