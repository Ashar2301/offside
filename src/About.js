import classes from './About.module.css'
import profile from './profilepic.jpg'
import {IoLogoInstagram,IoLogoGithub,IoIosMail} from 'react-icons/io'


const About=()=>{
    return(
        <div className={classes.main}>
            <section className={classes.section}>
                <img className={classes.profile} src={profile}></img>
                <h1>ASHAR RASHID</h1>
                <h3>UNDERGRAD STUDENT</h3>
                <div className={classes.social}>
                        <div style={{display:"flex"}}>
                            {/* <p className={classes.contact}>Instagram</p> */}
                                   <a href="https://www.instagram.com/datguyusher/" target="_blank"><IoLogoInstagram className={classes.logo}></IoLogoInstagram> </a>                   
                         </div>
                          <div style={{display:"flex"}}>
                              {/* <p className={classes.contact}>GitHub</p> */}
                                  <a href="https://github.com/Ashar2301" target="_blank"><IoLogoGithub className=         {classes.logo}></IoLogoGithub></a>
                          </div>
                             <div style={{display:"flex"}}>
                                  {/* <p className={classes.contact}>Email Address</p> */}
                                      <a href="mailto:ashar.rashid2301@gmail.com" target="_blank"><IoIosMail className={classes.logo}></IoIosMail></a>
                </div>
                 </div>
            </section>
            <aside>
                <p></p>
            </aside>
        </div>
    )
}

export default About;