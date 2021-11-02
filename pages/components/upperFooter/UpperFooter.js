import React from 'react'
import classes from "./UpperFooter.module.css"

export default function UpperFooter() {
    return (
                <div className={`${classes.uppersection} ${classes.upperwfsection}`}>
                    <div className={classes.uppercontainer}>
                        <div className={classes.upperheadercontainer}>
                            <h1 className={classes.uppergradient}>Create content faster with artificial intelligence</h1>
                            <div className={classes.max}>Stop spending so much time writing blog articles, social media posts, and sales emails... let Jarvis write for you.</div>
                            <a href="#" className={`${classes.button} ${classes.wbutton}`}>Get started today →</a>
                        </div>
                    </div>
                </div>
    )
}
