import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(
        [
            {
            id: 1,
            title: 'First Post',
            body: 'This is the body of the first post.',
            author: 'John Doe'
            },
            {
            id: 2,
            title: 'Second Post',
            body: 'This is the body of the second post.',
            author: 'Jane Smith'
            },
            {
            id: 3,
            title: 'Third Post',
            body: 'This is the body of the third post.',
            author: 'Bob Johnson'
            }
        ]
    );
    
    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id!== id));
    }

    useEffect(() => {
        console.log('use effect ran');
    },[name]);// function triggers when value of [parameter] is changed

    return ( 
     <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p>
     </div>
     );
}
 
export default Home;