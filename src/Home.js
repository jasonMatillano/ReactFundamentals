import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id!== id));
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(respones => {
                return respones.json();
            })
            .then(data => {
                console.log(data);
            })
    },[]);

    return ( 
     <div className="home">
      {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p> */}
     </div>
     );
}
 
export default Home;