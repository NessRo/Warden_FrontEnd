
import Bloglist from "./bloglist";
import useFetch from "./useFetch";



const Home = () => {

    const {data, isPending, isError} = useFetch( 'http://localhost:8000/blogs')

    return(
        
        <div className='all-blogs'>
            {isError && <div>{isError}</div>}
            {isPending && <div>loading....</div>}
            {data && <Bloglist data={data} title='All blogs!' />}
            
        </div>
    );
    }

    


export default Home;

