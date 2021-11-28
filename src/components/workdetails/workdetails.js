import './workdetails.css'
import { Link } from 'react-router-dom'

const Workdetails = () => {
    return ( 
        <div>
 <div id="work-description" className="text-left my-24">
            <h1 className="text-4xl font-bold mb-12">Work</h1>
            <p className="text-2xl font-medium mb-8">I’ve done a couple of personal and business projects. </p>
            <p className="text-2xl font-medium mb-8">The following is a sample of the works I've done so far in my Career</p>
        </div>

        <div id="project-examples">
             <div className="featured-work-card p-12 h-auto w-full my-16 rounded-3xl cursor-pointer flex overflow-hidden">
                <div className="work-details w-1/2 text-left">
                    <h2 className="text-3xl font-bold mb-5">TheBossDomain</h2>
                    <p className="platform font-semibold text-2xl mb-1">Web Application</p>
                    <p className="description text-xl mb-8"></p>
                     <Link to="/workdetails"><button type="button" className="btn btn-lg p-3 rounded-lg">  Case study</button></Link> 
                </div>

                <div className="work-visual"> 
                    <picture>
                        <img src="./iphone.webp" alt="" />
                    </picture>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Workdetails;