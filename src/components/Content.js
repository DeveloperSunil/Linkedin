import React from 'react';
import '../scss/content.scss';
import Image from '../images/image.jpg';
import Figma from '../images/figmalogo.jpg';
import Sidebar from './Sidebar';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
const Content = () =>{
    return(
        <div className="main-content">
            <div className="content">
                <div className="content-img">
                    <img src={Image} />
                    <div className="figma">
                        <img src={Figma} className="logo" />
                    </div>
                </div>
                
                <div className="content-text">
                    <h1>Figma</h1>
                    <p>A design plateform for teams who build products together.</p>
                    <ul className="contentlist">
                        <li>Design</li>
                        <li>San Francisco, CA</li>
                        <li>101,282 followers</li>
                    </ul>
                    <h6>See all 358 employees on Linkdein <ArrowForwardOutlinedIcon fontSize="small"/></h6>
                    <button class="button-1"><VisibilityOutlinedIcon /> Follow </button>
                    <button class="button-2"><OpenInNewOutlinedIcon/> Visit website</button>
                    <button class="button-3"><MoreHorizOutlinedIcon /></button>
                </div>

                <div className="link">
                    <div className="link-item">
                        <a href="#">Overview</a>
                    </div>
                    
                    <div className="link-item">
                        <a href="#">About</a>
                    </div>

                    <div className="link-item">
                        <a href="#">Products</a>
                    </div>

                    <div className="link-item">
                        <a href="#">Posts</a>

                    </div>

                    <div className="link-item">
                        <a href="#">Jobs</a>
                    </div>

                    <div className="link-item">
                        <a href="#">People</a>
                    </div>

                    <div className="link-item">
                        <a href="#">Videos</a>
                    </div>
                    
                </div>

                <div className="about">
                    <h2>About</h2>
                    <p>
                        Figma is the first professional-grade online tool created specifically for interface design .
                        Born on the Web, Figma helps the entire product team create, test, and ship better designs, faster.
                    </p>
                    <div className="about-section">
                            <div className="left">
                                <p className="para">Website URL</p>
                                <a href="#">Figma.com</a>
                            </div>

                            <div className="right">
                                <p className="para">Funding via Crunchbase</p>
                                <p className="para">Series D</p>
                                <p className="para">US$ 50M</p>
                            </div>
                    </div>
                    <p className="parag">See all details</p>
                </div>

            </div>
            <Sidebar/>
        </div>
    );
}

export default Content;