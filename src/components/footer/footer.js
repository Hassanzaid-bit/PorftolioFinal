import './footer.css'
import React from 'react'


const Footer = () => { 
    return (  
        <footer className="my-16">
            <h3 className="text-left text-4xl font-bold mb-8">Where to find me</h3>
            <div className="footer-links flex  flex-col md:flex-row justify-between mb-16">
                <div class="contact-card ">
                    <div className="max-w-xs text-left">
                        <a href="https://github.com/hassanzaid-bit/" className="hover:no-underline">
                            <h4 className="text-3xl font-semibold mr-0">GitHub</h4>
                            <h4 className="text-3xl">Code</h4>
                        </a>
                        <i className="bi bi-arrow-right float-right relative bottom-12 right-8 text-4xl"></i>
                    </div>
                </div>
                <div class="contact-card ">
                    <div className="max-w-xs text-left">
                        <a href="https://www.instagram.com/hassan_zaid__/ " className="hover:no-underline">
                            <h4 className="text-3xl font-semibold mr-0">Instagram</h4> 
                            <h4 className="text-3xl">UI Posts</h4>
                        </a>
                        <i className="bi bi-arrow-right float-right relative bottom-12 right-8 text-4xl"></i>
                    </div>
                </div>
                <div class="contact-card">
                    <a href="https://twitter.com/hassan_zaid__" className="hover:no-underline">
                        <div className="max-w-xs text-left">
                            <h4 className="text-3xl font-semibold mr-0">Twitter</h4>
                            <h4 className="text-3xl">Random thoughts</h4>
                            <i className="bi bi-arrow-right float-right relative bottom-12 right-8 text-4xl"></i>
                        </div> 
                    </a>
                   
                </div>
            </div>

            <div className="copyright flex justify-between font-semibold">
                <span>&copy;Hassan Zaid</span>
                <p>Based in Nairobi,Kenya</p>
            </div>
        </footer>
     );
}
 
export default Footer;