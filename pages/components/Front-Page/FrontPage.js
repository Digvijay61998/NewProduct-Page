import classes from "./FrontPage.module.css"
import Image from 'next/image'
import React from 'react';
import icon from "../../../public/icon.png"

function FrontPage() {

    return (
       <div className={classes.frontPage}>
           <section className={classes.section}>
            <div className={classes.NevBar}>
               <div className={classes.logoDiv}>  <Image className={classes.logo} src={icon} alt="logo" width="100%" height="100%"/>
               <h1 className={classes.name}>startup kingdoms</h1>
                
            </div>
            <div className={classes.headerline}>
                <div className={classes.productservice}><a className={classes.a}>customers</a></div>
                <div className={classes.productservice}><a className={classes.a}>Pricing</a></div>
                <div className={classes.productservice}><a className={classes.a}>signin</a></div>
            </div>
           </div>
         <div className={classes.titlestatus}>
<div className={classes.blogtitle}>Unleash the Power of</div>
<div className={classes.blogsubtitle}>WORDS </div>
<div className={classes.bloginfotitle}>“Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.” & easy to create content for your blog, social media, website, and more! Rated 5/5 stars in 1,000+ reviews.</div>
<div className={classes.signin}>create blog</div>

         </div>
            </section>
       </div>
    )
}

export default FrontPage
