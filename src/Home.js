const Home = () => {

    const handleClick = () => {
        console.log('click');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>handleClickAgain('mario')}>click me again</button>
        </div>
     );
}
 
export default Home;