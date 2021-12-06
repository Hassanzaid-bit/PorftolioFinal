import './hero.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => { 
    return ( 
        <div id="hero" className=" text-left ">
            <div className="introduction">
                <p><span className="wave">👋</span> Hello!I'm Zaid.</p>
            </div>
            <div className="role">
                <h1>Designer.</h1>
                <h1>Developer.</h1>
            </div>
            <div className="role-details text-base mb-16">
                <p className="mb-8">I enjoy building <span>usable</span>, <span>accesible</span> , and <span>aesthetically pleasing</span> websites to provide a generally pleasing user experience</p>
                < Link to="/work" className="link projects  relative no-underline inline-block mr-4">View projects</Link> or<Link to="/about" className="link more-info relative inline-block no-underline ml-4">Find out more</Link>
            </div>
        </div>         
     );
}
 
export default Hero;

