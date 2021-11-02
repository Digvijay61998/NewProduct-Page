import classes from "./StepsForBlog.module.css"
import HorizontalScroll from 'react-scroll-horizontal'

export default function StepsForBlog() {
    return (
    <div className={classes.App}>
      <HorizontalScroll reverseScroll={true}>
          <div className={classes.main}>
            <img className={classes.img} src="https://www.host.ie/wp-content/uploads/2019/06/WordPress-updates.jpeg" />
              <h1 className={classes.h1}>
              The greatest glory in living lies not in never falling, but in rising every time we fall.
              </h1>
          </div>

          <div className={classes.main}>
            <img className={classes.img} src="https://media2.vault.com/18624/mslayoff_59637a799e62e.jpg" />
              <h1 className={classes.h1}>
              The greatest glory in living lies not in never falling, but in rising every time we fall.
              </h1>
          </div>

          <div className={classes.main}>
            <img className={classes.img} src="https://i.pinimg.com/originals/68/06/20/680620f275d622b0ae5482b2c45778af.jpg" />
              <h1 className={classes.h1}>
              The greatest glory in living lies not in never falling, but in rising every time we fall.
              </h1>
          </div>

          <div className={classes.main}>
              <img className={classes.img} src="https://perks.optum.com/blog/wp-content/uploads/2020/08/081420_RelaxationTips_Blog.png" />
              <h1 className={classes.h1}>
              The greatest glory in living lies not in never falling, but in rising every time we fall.
              </h1>
          </div>
      </HorizontalScroll>

    </div>

    )
}
