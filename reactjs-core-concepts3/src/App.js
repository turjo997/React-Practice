import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <ExternalComments></ExternalComments>

    </div>
  );
}

function ExternalComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))

  }, []);

  return (
    <div>
      <h2>External Comments</h2>
      <p>{comments.length}</p>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Email : {props.email}</h3>
      <p>Body : {props.body}</p>
    </div>
  )
}

export default App;
