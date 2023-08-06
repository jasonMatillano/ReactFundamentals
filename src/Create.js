import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [auhtor , setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory() // use history package to go back to previous page or any chosen page

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, auhtor}

        setIsPending(true)

        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{ 
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('blog added')
                setIsPending(false)
                //history.go(-1) // go back to previous page
                history.push('/') // go back to previous page
            })
        }, 1000)

    }

    return (  
        <div className="create">
         <h2>Add a New Blog</h2>
         <form>
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
            {!isPending && <p><button onClick={handleSubmit}>Add Blog</button></p> }
            {isPending && <button disabled>Adding Blog...</button>}
            
         </form>
        </div>              
    );
}
 
export default Create;