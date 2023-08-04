// const Bloglist = (props) => {
// const blogs = props.blogs;
// const title = props.title;
// const handleDelete = props.handleDelete;
const Bloglist = ({blogs,title,handleDelete}) => {

    console.log(title);

    return (
        <div className="blog-list">
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
        ))}
        </div>
    );
}
 
export default Bloglist;