// const Bloglist = (blogs,title,handleDelete) => {
// other method
const Bloglist = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;

    console.log(blogs,title,handleDelete);


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