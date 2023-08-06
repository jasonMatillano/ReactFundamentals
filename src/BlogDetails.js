import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory(); // use history package to go back to chosen page

  const handleDelete = () => { // delete blog from db
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    })
    .then(() => {
      history.push('/') // redirect to home after deletion
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          {/* fetching data thru param id... */}
          <h2>{ blog.title + " id:" + id}</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;