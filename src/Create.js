import { useState } from "react";

const Create = () => {
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [auhtor , setAuthor] = useState('mario')

    // on submit save input data to blog object
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, auhtor}
        console.log(blog)
    }

    return (  
        <div className="create">
         <h2>Add a New Blog</h2>
         <form onSubmit={handleSubmit}>
            <label> Blog Title</label>
            <input 
            type="text"
            required
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            />
            <label> Blog Body</label>
            <textarea 
            required
            value={body} 
            onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <label> Blog Author: </label>
            <select 
            value={auhtor}
            onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>
            </select>
            <button>Add Blog</button>
            <p>{title}</p>
            <p>{body}</p>
            <p>{auhtor}</p>
            
         </form>
        </div>              
    );
}
 
export default Create;