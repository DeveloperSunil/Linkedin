import React from 'react';
import '../scss/sidebar.scss';
import Pagecard from './Pagecard';
import Invision from '../images/invision.png';
import Sketch from '../images/sketch.png';
import Dribble from '../images/dribble.png';
import Behance from '../images/behance.png';
import Overlap from '../images/overlap.png';
import Medium from '../images/medium.png';
import Adobe from '../images/Adobe.png';
import Slack from '../images/slack.png';
import Linkedinlogo from '../images/linkedinlogo.png'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
const Sidebar = () =>{
    return(
        <>
        <div className="sidebar">
            <div className="page-card-container">
                <h6>Pages people also viewed</h6>
                <Pagecard logo={Invision} heading={"InVision"} source={"Internet"} followers={"137k"}/>
                <Pagecard logo={Sketch} heading={"Sketch"} source={"Internet"} followers={"33k"}/>
                <Pagecard logo={Dribble} heading={"Dribbble"} source={"Internet"} followers={"162k"}/>
                <Pagecard logo={Behance} heading={"Behance"} source={"Internet"} followers={"67k"}/>
                <Pagecard logo={Overlap} heading={"Overlap Studio"} source={"Internet"} followers={"105k"}/>
                <Pagecard logo={Medium} heading={"Medium"} source={"Internet"} followers={"101k"}/>
                <Pagecard logo={Adobe} heading={"Adobe"} source={"Internet"} followers={"268M"}/>
                <Pagecard logo={Slack} heading={"Slack"} source={"Internet"} followers={"582k"}/> 
            </div>

            <div className="sidebar-footer">
                <div className="sidebar-footer-item">
                    <div> <p>About</p> </div>
                    <div> <p>Accessibility</p> </div>
                    <div> <p>Help Center</p> </div>
                </div>
                   
                <div className="sidebar-footer-item">
                    <div> <p>Privacy & Terms<KeyboardArrowDownRoundedIcon/> </p> </div>
                    <div> <p>Ad Choices</p> </div>   
                </div>

                <div className="sidebar-footer-item">
                    <div> <p>Advertising</p> </div>
                    <div> <p>Bussiness Services<KeyboardArrowDownRoundedIcon /></p> </div> 
                </div>

                <div className="sidebar-footer-item">
                    <div><p>Get the LinkedIn App</p></div>
                    <div><p><MoreHorizRoundedIcon/></p></div> 
                </div>
                <div className="groove-border"></div>
                <div className="main-footer">
                    <div>
                        <img src={Linkedinlogo} />
                    </div>
                    <div>
                        LinkedIn &copy; 2021
                    </div>
                </div>
           </div>
        </div>

        

        </>
    )
} 

export default Sidebar;