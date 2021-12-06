import './articlesingle.css'
import { Link } from 'react-router-dom'


const Articlesingle = () =>{  

        return (
            <div> 
                <div className="article-heading my-20 mx-0 flex text-left">
                    <div className="heading-text">
                        <div className="relative">
                            <h4 class="link-article"><Link to="/articles"><i class="bi bi-arrow-left"></i>BACK</Link></h4>
                        </div>
                        <h1 className="text-3xl font-bold my-20"> Title </h1>
                        <h4 className="text-2xl"> 10 min read</h4>
                    </div>
                    <div className="heading-image hidden">
                        <img src="/articlepic.webp" alt="" className="rounded-2xl"/>
                    </div>
                </div>
            
                <div className="article-content my-0 mx-auto text-left ">
                    <div>
                        <p className='text-2xl'> Content </p>
                    </div>                   
                </div>    
            </div>
        )    
}
      
export default Articlesingle;

