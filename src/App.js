import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title  = 'My React App';
  const likes = 50;
  const person = {name : 'jason', age : 30};
  const link = 'https://google.com';

  return (
    <div className="App">
      <Home></Home>
      <Navbar></Navbar>
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
