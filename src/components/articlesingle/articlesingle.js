import './articlesingle.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { singleBlog } from '../../firebase';


const Articlesingle = () =>{
    const { id } = useParams();
    const [article, setArticle ] = useState({});
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>
    {
        setLoading(true)
        singleBlog(id) 
            .then((data)=>
            {
              
                setArticle(data)
                setLoading(false)
            })
            .catch((err)=> console.log(err))
    }, [])
  
    if(loading)
    {
        return(<h1>LOADING THE DATA</h1>)
    }else{
        return (
            <div> 
                <div className="article-heading my-20 mx-0 flex text-left">
                    <div className="heading-text">
                        <h4 class="link"><Link to="/articles"><i class="bi bi-arrow-left"></i>BACK</Link></h4>
                        <h1 className="text-6xl my-20"> {article.Title} </h1>
                        <h4 className="text-2xl"> Time uploaded  • 3 min read</h4>
                    </div>
                    <div className="heading-image">
                        <img src="/articlepic.webp" alt="" className="rounded-2xl"/>
                    </div>
                </div>
            
                <div className="article-content my-0 mx-auto text-left ">
                    <div>
                        <p className='text-4xl'> { article.Content } </p>
                    </div>                   
                </div>    
            </div>
        )    
    }
   
}
      
export default Articlesingle;

