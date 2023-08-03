const Home = () => {
    const handleClick = (name) => {
        console.log('clicked' );
    }

    const handleClickAgain = (name) => {
        console.log('clicked again' + name); 
    }

    return ( 
     <div className="home">
        <h2>Home</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClickAgain(' jason')}>
        Click Me Again</button>
     </div>
     );
}
 
export default Home;