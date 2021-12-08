import { Link } from "react-router-dom";
import './workdetailspecific.css'

const Detailspecific = () => { 
    return (  
        <div id="project-details" className='my-28 text-left'> 
            <div className="relative">
                <Link to="/work" className='link-work text-2xl font-bold'><i className="bi bi-arrow-left mr-2"></i>BACK</Link>
            </div>
           
            <h1 className='text-4xl font-semibold my-12'>TheBossDomain</h1>
            <p className='text-2xl mb-12'>  </p>
            <a href="thebossdomain.co.ke" className="flex justify-center"><button type="button" className="btn btn-lg relative p-4 rounded-lg">Visit Website</button></a>  
        </div>
     );
}
 
export default Detailspecific;