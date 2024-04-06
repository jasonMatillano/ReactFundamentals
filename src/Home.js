const Home = () => {

    const handleClick = (e) => {
        console.log('click', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e)=>handleClickAgain('mario', e)}>click me again</button>
        </div>
     );
}
 
export default Home;