import React from 'react'
import classes from "./Aboutus.module.css"

function Aboutus() {
    return (
        <div className={classes.aboutus_div}>
        <div className={classes.Aboutus}>
            <div className={classes.info_div}>
            <div className={classes.whatisAI}><h1>What is AI blog writter?</h1></div>
            <h2 className={classes.ai_trained}>Artificial Intelligence trained to generate <div className={classes.ai_trainedcreative}>original, creative content</div></h2>

            
            <h5 className={classes.info_AI}>We consulted with the world’s best SEO and Direct Response Marketing experts to teach AI how to write blog articles, social media posts, website copy, and more...</h5>

            </div>
            
        </div>
        </div>
    )
}

export default Aboutus
