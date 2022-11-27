import Introduction from "./Components/Introduction";
import ComponentInfo from "./Components/ComponentInfo";
import ClassComponentFrom from "./Components/ClassComponentFrom";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [post, setPost] = useState([])
  useEffect(()=>{
    async function allPost (){
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data)
      console.log(res.data)
    }
    allPost()
  },[])
  return (
    <div className='App'>
      <Introduction />
      <hr />
      <ComponentInfo />
      <hr />
      <ClassComponentFrom></ClassComponentFrom>
      <hr />
      <div>
        {post.map((onePost) => {
          return (
            <>
              <h2>User id :- {onePost.userId}</h2>
              <h3>id :- {onePost.id}</h3>
              <h4>User title :- {onePost.title}</h4>
              <p>User body :- {onePost.body}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
