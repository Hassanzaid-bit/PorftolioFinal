import './article.css'
import React from 'react'


class Articles extends React.Component {

  
  
    render(){
        return( 
        <div>
            <h2 className="text-4xl font-bold text-left article-heading">Articles</h2>
            <div id="articles">
                <div class="article-cards">
                    <div class="article-card one text-base">
                        <h3>Decide when to stop designing before you begin</h3>
                        <h3>3 mins</h3>
                    </div>
                    <div class="article-card two text-base">
                        <h3>Decide when to stop designing before you begin</h3>
                        <h3>3 mins</h3>
                    </div>
                    <div class="article-card three text-base">
                        <h3>Decide when to stop designing before you begin</h3>
                        <h3>3 mins</h3>
                    </div>
                    <div class="article-card four text-base">
                        <h3>Decide when to stop designing before you begin</h3>
                        <h3>3 mins</h3>
                    </div>
                </div>

                            {/* <h2 className="text-4xl font-bold text-left pl-20">Articles</h2>
                    <div className="article-cards">
                        { articles.map((article)=>{
                            return(
                                <Link to={ `/article/${article.id}` } className="hover:no-underline" >
                                    <div className="article-card one" key={article.id}>
                                        <h3>{article.title}</h3>
                                        <h3>3 mins</h3>
                                    </div>
                                </Link>
                            
                            )
                        }) }
                        
                    </div> */}
                </div>
            </div>
    
     
        )
    }


}

 
export default Articles;