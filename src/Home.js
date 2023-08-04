import { useState } from "react";
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
    


    return ( 
     <div className="home">
      <BlogList blogs={blogs} title="This is props title"/>
     </div>
     );
}
 
export default Home;