import './articlepage.css'
import { Link } from 'react-router-dom'

function Articlepage (){
  
    return(
        <div id="articles-content" className='my-28 mx-auto text-left'>
            <h1 className="text-4xl font-bold mb-16 relative">Articles</h1>
           
                return(
                    <div className="articlepage-card text-xl p-12 max-w-4xl md:max-w-full cursor-pointer my-20">
                        <h3 className="mb-7 text-3xl font-semibold" >Title </h3>
                        <p className="mb-7 text-2xl h-36 overflow-hidden">Content</p>
                        <Link to={`article-single/`} className="font-bold hover:no-underline text-4xl">Read more <i class="bi bi-arrow-right"></i></Link>
                    </div>   
                )
        </div>
    )
}

export default Articlepage;