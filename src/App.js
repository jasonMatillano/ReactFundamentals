import './App.css';

function App() {

  const title  = 'My React App';
  const likes = 50;
  const person = {name : 'jason', age : 30};
  const link = 'https://google.com';

  return (
    <div className="App">
      <div className="content"> 
        <h1> {title} </h1>
        <p>Liked {likes} Times </p>

        <p>My name is {person.name} im {person.age} </p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
