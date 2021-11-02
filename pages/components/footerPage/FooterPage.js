import React from 'react'
import classes from "./FooterPage.module.css"

export default function FooterPage() {
    return (
        <>
            <div className={classes.FooterPage}>
                <div className={classes.container}>
                    <div className={classes.footer_top_container}>
                        <div className={classes.brand_container}><h3>Create blog & social content fast with artificial intelligence</h3></div>
                        <div className={classes.productcontainer}>
                            <div className={classes.footer_column}>
                                <div className={classes.footer_title}>Product</div>
                                <a href="#" className={classes.footer_link}>Starter Features</a>
                                <a href="#" className={classes.footer_link}>Pro Features</a>
                                <a href="#" className={classes.footer_link}>Boss Mode Features</a>
                                <a href="#" className={classes.footer_link}>25+ Languages</a>
                                <a href="#" className={classes.footer_link}>Pricing</a></div>
                        </div>
                        <div className={classes.footer_column}>
                            <div className={classes.footer_title}>Content</div>
                            <a href="#" className={classes.footer_link}>Reviews</a>
                            <a href="#" className={classes.footer_link}>The AI Blog</a>
                            <a href="#" className={classes.footer_link}>Expert Videos</a>
                        </div>
                        <div className={classes.footer_column}>
                        </div>
                        <div className={classes.footer_column}>
                            <div className={classes.footer_title}>Customer Support</div>
                            <a href="#" className={classes.footer_link}>Live 101 Trainings</a>
                            <a href="#" className={classes.footer_link}>Official Bootcamp</a>
                            <a href="#" target="_blank" className={classes.footer_link}>FAQ&nbsp;&amp;&nbsp;Help Center</a>
                            <a href="#" target="_blank" className={classes.footer_link}>App Status</a>
                            <a href="#" className={classes.footer_link}>AI@Blog.ai</a>
                        </div>
                    </div>

                </div>
                <div className={classes.footerbottomcontainer}>
                    <div className={classes.socialicon}>
                        <a href="#" target="_blank" className={`${classes.socialicon} ${classes.twitter}`} >
                            <img src="https://uploads-ssl.webflow.com/60a295eaddb3e10f7bae5980/60a295eaddb3e13304ae59fb_twitter-white.svg" alt="" />
                        </a>
                        <a href="#" target="_blank" className={`${classes.socialicon} ${classes.facebook}`}>
                            <img src="https://uploads-ssl.webflow.com/60a295eaddb3e10f7bae5980/60a295eaddb3e11b74ae59ef_facebook-white.svg" alt="" />
                        </a><a href="#" target="_blank" className={`${classes.socialicon} ${classes.instagram}`}>
                            <img src="https://uploads-ssl.webflow.com/60a295eaddb3e10f7bae5980/60a295eaddb3e1022dae59fc_instagram-white.svg" alt="" />
                        </a><a href="#" target="_blank" className={`${classes.socialicon} ${classes.linkedin}`}>
                            <img src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b8684a7c30e11_linkedin.svg" alt="" />
                        </a><a href="#" target="_blank" className={`${classes.socialicon} ${classes.youtube}`}>
                            <img src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/6116b6f6638346eecc2b604f_youtube%201.svg" alt="" />
                        </a></div>
                    <div className={classes.footerlinklegal}><a href="/privacy">Privacy</a>
                        <a href="/terms" className={classes.footerlinklegal}>Terms</a>
                        <div className={classes.footerlinklegal}>@ 2021 Blog.ai</div></div></div>
            </div>
        </>
    )
}
