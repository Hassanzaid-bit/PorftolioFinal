import './articlepage.css'
import { Link } from 'react-router-dom'
// import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { getBlogs } from '../../firebase';
import Articles from '../articles/article';

function Articlepage (){
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => 
    {
        setLoading(true)
        getBlogs()
        .then((blogs)=>
        {    
            setArticles(blogs);
            setLoading(false)
        })
        .catch(err => console.log(err))

    }, [])

    if(loading){
        return(<h1>LOADING THE DATA</h1>)
    }
    return(
        <div id="articles-content" className='my-28 mx-auto text-left'>
            <h1 className="text-4xl font-bold mb-16 relative">Articles</h1>
            {articles.map((article)=>
            {
                return(
                    <div className="articlepage-card text-xl p-12 max-w-4xl md:max-w-full cursor-pointer my-20">
                        <h3 className="mb-7 text-3xl font-semibold">{ article.Title }</h3>
                        <p className="mb-7 text-4xl h-36 overflow-hidden">{ article.Content }</p>
                        <Link to="/article-single"className="font-bold hover:no-underline text-4xl">Read more <i class="bi bi-arrow-right"></i></Link>
                    </div>  
                )
            })}
            
        </div>
    )
}




// class Articlepage extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             articles: [],
//         }
//         this.fetchTask = this.fetchTask.bind(this)
//     }
 
//     componentWillMount(){
//         this.fetchTask()  
//     }

//     fetchTask(){
//         getBlogs()
//         .then((blogs) => 
//         { 
//             this.setState(
//                 {
//                     articles : blogs
//                 }
//             )
//             console.log(Articles)
//         })
//         .catch((err) => 
//         {
//             console.log(err)
//         })
//     }

//     render(){
//         // var articles = this.state.articles
//         return (
//             <div id="articles-content" className='my-28 mx-auto text-left'>
//                 <h1 className="text-4xl font-bold mb-16 relative">Articles</h1>
//                     <div className="articlepage-card text-xl p-12 max-w-4xl md:max-w-full cursor-pointer my-20">
//                         <h3 className="mb-7 text-3xl font-semibold">Heading</h3>
//                         <p className="mb-7 text-4xl h-36 overflow-hidden">Content</p>
//                         <Link to="/article-single"className="font-bold hover:no-underline text-4xl">Read more <i class="bi bi-arrow-right"></i></Link>
//                     </div>  
//              </div>
//         )
// }
// }
 
export default Articlepage;