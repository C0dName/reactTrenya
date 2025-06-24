import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {

    // const [value, setValue] = useState("текст в инпуте")
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript1', body: 'Description'},
        {id:2, title: 'Javascript2', body: 'Description'},
        {id:3, title: 'Javascript3', body: 'Description'},
]);




  return (
      <div className="App">
          <form>
              <input type="text" placeholder={"Название поста"}/>
              <input type="text" placeholder={"Описание поста"}/>
              <MyButton disabled>Создать пост</MyButton>
          </form>
          <PostList posts={posts} title="Посты про JS"/>



          {/*<ClassCounter/>*/}
      </div>
  );
}

export default App;
