import './aboutme.css'

const Aboutme = () => {
    return ( 
        <div className="aboutme-wrapper text-left">
            <div class="personal-details">
                <h1 className="font-bold text-4xl my-6">Who's this?</h1> 
                <p className="text-4x1 font-medium">  Hi, I’m Hassan Zaid .  </p>
                <p className="text-4x1 font-medium aboutme">  I believe that Web Design should not be restricted to Interfaces and Technologies, but should also focus on the needs, wants and limitations of the end users. </p>
                <p className="text-4x1 font-medium aboutme">  
                It's not enough to generate leads and complete sales, your website needs to tell your story. <br/>
                    Forging a strong connection with your visitors, either by making them purchase your product/services or promoting your brand.
                </p>
                <p className="text-4x1 font-medium aboutme">  
                    We never forget how people make us feel, how does your website make your visitors feel ?  <br/>              
                    I’m most active as <a href="https://www.instagram.com/hassan_zaid__/">@Hassan_zaid__</a> on Instagram, where I post about Design and Development.
                </p>
            </div>
            
            <div class="personal-skills text-sm font-normal my-6">
                <h2 className="text-4xl font-bold my-6">What I can do</h2>
                <p className="font-medium skill-desc">Here are some of the things I can do. I spend a lot of time learning things that help me grow as a Designer and Developer.</p>
                <div class="skillset">
                    <div className="my-5">
                        <h4 className="text-3xl font-semibold skill">HTML/CSS/JAVASCRIPT</h4>
                        <p className="text-2xl font-medium skill-desc">My go-to tools for working on the Web.</p>
                    </div>
                    <div className="my-5">
                    <h4 className="text-3xl font-semibold skill">React</h4>
                        <p className="text-2xl font-medium skill-desc">I am proeficient in using React Library.I choose React because of it's Single Page Application nature which plays a big role in creating a Pleasant User Experience </p>
                    </div>

                    <div className="my-5">
                    <h4 className="text-3xl font-semibold skill">Node Js</h4>
                        <p className="text-2xl font-medium skill-desc">I am proeficient in using Node Js it's non blocking nature for fast request and response cycles </p>
                    </div>


                    <div className="my-5">
                    <h4 className="text-3xl font-semibold skill">Firebase</h4>
                        <p className="text-2xl font-medium skill-desc">I am proeficient in Cloud firestore and it's what i use oftenly for my Backend</p>
                    </div>

                    <div className="my-5">
                    <h4 className="text-3xl font-semibold skill">Django</h4>
                        <p className="text-2xl font-medium skill-desc">I am familiar with Django Framework</p>
                    </div>
                    <div className="my-5">
                    <h4 className="text-3xl font-semibold skill">PHP</h4>
                        <p className="text-2xl font-medium skill-desc">I am familiar with PHP</p>
                    </div>
                    
                </div>
            </div>
         </div>
     );
}
 
export default Aboutme;