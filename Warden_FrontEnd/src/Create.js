import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('Please enter a valid name')
    const [body, setBody] = useState('Please enter a valid body')
    const [author, setAuthor] = useState('Mario')
    const [isPending, setIsPending] = useState(false)
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        


        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new post added')
            setIsPending(false)
            Navigate('/')
        } )

    }

    return ( 
        <div className="create">
            <h2>add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)} 
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label >blog author</label>
                <select value={author} onChange= {(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>Adding.....</button>}
            </form>
        </div>
     );
}
 
export default Create;