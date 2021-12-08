import './work.css'
import './iphone.webp'
import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
    return ( 
        <div id="featured-work" className="mb-20 text-left">
            <h2 className="text-4xl font-bold">Featured work</h2>
            <div className="featured-work-card p-8 h-auto w-full my-14 rounded-3xl cursor-pointer flex overflow-hidden">
                <div className="work-details w-1/2 text-left">
                    <h2 className="text-2xl font-medium mb-4">TheBossDomain</h2>
                    <p className="platform font-semibold text-2xl mb-1">Web Application</p>
                    <p className="description text-xl mb-8"></p>
                    <Link to="/workdetails">  <button type="button" className="btn btn-lg case-study">Case study</button> </Link>
                </div> 

                <div className="work-visual"> 
                    <picture>
                        <img src="./iphone.webp" alt="" />
                    </picture>
                </div>
            </div>
            <h3 className="link-project text-center" id="more-projects"> 
                 <Link to="/work" className="link more-info relative inline-block no-underline ml-8 text-3xl">More Projects<i class="bi bi-arrow-right"></i></Link>
            </h3>
        </div>
     );
}
 
export default Work;