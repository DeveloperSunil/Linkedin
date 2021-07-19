import React from 'react';
import '../scss/quicklink.scss';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
const QuickLink = () =>{
    return(
        <div className="section">
            <div className="section-item">
                <span> <HomeOutlinedIcon/> </span>
                <a href="#">Home</a>
            </div>

            <div className="section-item">
            <span> <PeopleAltOutlinedIcon/> </span>
                <a href="#">My network</a>
            </div>

            <div className="section-item">
            <span> <WorkOutlineIcon/> </span>
                <a href="#">Job offers</a>
            </div>

            <div className="section-item">
            <span> <PersonOutlineOutlinedIcon/> </span>
                <a href="#">My profile</a>
            </div>
        </div>
    );
}

export default QuickLink;