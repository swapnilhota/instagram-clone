import React from 'react';
import './App.css';
import Post from './Post';

function App() {
    return (
        <div className="App">

            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>

            <h1>Hello Clever Programmers Let's build an Insta clone with React</h1>

            <Post username="swapnilhota" caption="learning React" imageUrl="https://images.unsplash.com/photo-1615069433711-41e14f250182?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
            <Post />
            <Post />
            <Post />

        </div>
    );
}

export default App;