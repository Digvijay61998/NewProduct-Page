import classes from "./FrontPage.module.css"
import React from 'react'
import Image from 'next/image'

function FrontPage() {
    return (
       <div className={classes.frontPage}>
           <section className={classes.section}>
            <div className={classes.NevBar}>
               <div className={classes.logoDiv}>  <Image className={classes.logo} src="/Sking.png" alt="logo" width="30px" height="40px"/>
               <h1>startup kingdoms</h1>
                
            </div>
            <div className={classes.headerline}>
                <div className={classes.productservice}><a className={classes.a}>customers</a></div>
                <div className={classes.productservice}><a className={classes.a}>Learn</a></div>
                <div className={classes.productservice}><a className={classes.a}>Pricing</a></div>
            </div>
           </div>
         <div className={classes.titlestatus}>
<div className={classes.blogtitle}>The Future of Writing</div>
<div className={classes.blogsubtitle}>create your own blog or AI will create. </div>
<div className={classes.bloginfotitle}>Artificial intelligence makes it fast & easy to create content for your blog, social media, website, and more! Rated 5/5 stars in 1,000+ reviews.</div>
<div className={classes.signin}>create blog</div>

         </div>
            </section>
       </div>
    )
}

export default FrontPage
