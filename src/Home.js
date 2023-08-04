import { useState } from "react";

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
    


    return ( 
     <div className="home">
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
     </div>
     );
}
 
export default Home;