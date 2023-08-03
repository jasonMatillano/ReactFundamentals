const Home = () => {
    const handleClick = (e) => {
        console.log('clicked', e);
    }

    const handleClickAgain = (name,e) => {
        console.log('clicked again' + name , e.target); 
    }

    return ( 
     <div className="home">
        <h2>Home</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickAgain(' jason', e)}>Click Me Again</button>
     </div>
     );
}
 
export default Home;