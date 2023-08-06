import { useState } from "react";

const Create = () => {
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [auhtor , setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const [feedback, setFeedback] = useState('')

    const handleSubmit = (e) => {//function to handle the form submission
        e.preventDefault()
        const blog = {title, body, auhtor}

        setIsPending(true)//set to true so that we can show the loading animation

        setTimeout(() => {//set timeout to 1 second so that we can see the loading animation
            fetch('http://localhost:8000/blogs',{ //this is the url we are going to send the data to
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('blog added')
                console.log(blog)
                console.log(isPending)
                setIsPending(false)
                setFeedback('successfully added blog')
                
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
            {!isPending && <p><button onClick={() => setFeedback('')}>Clear</button></p> }
            {isPending && <button disabled>Adding Blog...</button>}

            <p>{feedback}</p>
    
            
         </form>
        </div>              
    );
}
 
export default Create;