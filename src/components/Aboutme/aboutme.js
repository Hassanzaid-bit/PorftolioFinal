import './aboutme.css'

const Aboutme = () => {
    return ( 
        <div className="about-me text-left my-28">
            <div class="personal-details">
                <h1 className="font-bold text-4xl my-6">Who's this?</h1> 
                <p className="text-2x1 font-medium">
                    Hi, I’m Hassan Zaid. I am passionate about Designing and Building engaging experieces on the Web .
                    I believe a website should have a personality which should reflect on the values that a business stands for. <br/>
                    We as humans have a desparate need for connection not only from other humans but also from relatable content and technology <br/>
                    I try to use that to create engaging websites because I know that will create a lasting impression for a business. <br/>
                    I believe that for a business that has a growth mindset will not focus on having websites only for conversion purposes but for creating an expereice funnel <br/>
                    I believe experinces have a lasting impressions to a user and this might turn them into your evangelists(marketers). <br/>
                    I believe in creating and experience and engaging a user before converting a client will make your business stand out from the crowd.
                    
                    I’m most active as <a href="https://www.instagram.com/hassan_zaid__/">@Hassan_zaid__</a> on Instagram, where I post about design and development. You can also find me on GitHub where I experiment with code.</p>
            </div>
            
            <div class="personal-skills text-sm font-normal my-6">
                <h2 className="text-4xl font-bold my-6">What can you do?</h2>
                <p className="text-2xl font-medium">Here are some of the things I can do. I spend a lot of time learning things that help me grow as a Designer and Developer.</p>

                <h3 className="code text-3xl  font-medium my-5">Code</h3>
                <div class="skillset">
                    <div className="my-5">
                        <h4 className="text-3xl font-semibold">HTML/CSS/JAVASCRIPT</h4>
                        <p className="text-2xl font-medium">My go-to tools for working on the Web.</p>
                    </div>
                    <div className="my-5">
                    <h4 className="text-3xl font-semibold">React</h4>
                        <p className="text-2xl font-medium">I am proeficient in using React Library.I choose React because of it's Single Page Application nature which plays a big role in creating a Pleasant User Experience </p>
                    </div>

                    <div className="my-5">
                    <h4 className="text-3xl font-semibold">Node Js</h4>
                        <p className="text-2xl font-medium">I am proeficient in using Node Js it's non blocking nature for fast request and response cycles </p>
                    </div>


                    <div className="my-5">
                    <h4 className="text-3xl font-semibold">Firebase</h4>
                        <p className="text-2xl font-medium">I am proeficient in Cloud firestore and it's what i use oftenly for my Backend</p>
                    </div>

                    <div className="my-5">
                    <h4 className="text-3xl font-semibold">Django</h4>
                        <p className="text-2xl font-medium">I am familiar with Django Framework</p>
                    </div>
                    <div className="my-5">
                    <h4 className="text-3xl font-semibold">PHP</h4>
                        <p className="text-2xl font-medium">I am familiar with PHP</p>
                    </div>
                    
                </div>

                <h3 className="code text-3xl  font-medium my-5">Design</h3>
                <div className="my-5">
                    <h4 className="text-3xl font-semibold">Figma</h4>
                    <p className="text-2xl font-medium">My go to for Designing for the Web or any Digital art .</p>
                </div>
                <div className="my-5">
                    <h4 className="text-3xl font-semibold">PhotoShop</h4>
                    <p className="text-2xl font-medium">My go to for Designing for Posters and Flyers .</p>
                </div>
            </div>
         </div>
     );
}
 
export default Aboutme;