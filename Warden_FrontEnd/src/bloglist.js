import { Link } from "react-router-dom";

const Bloglist = ({data}) => {
     return(
         <div className="blog-list">
            <h2>All blogs</h2>
            {data.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}

         </div>
     );
     
};

export default Bloglist;