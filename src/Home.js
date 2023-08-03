import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario');
    
    const handleClick = () => {
        setName('luigi');
        console.log(name);
    }

    return ( 
     <div className="home">
        <h2>HomePage</h2>
        <h3>{ name }</h3>
        <button onClick= {handleClick} >Click Me</button>

     </div>
     );
}
 
export default Home;