import React from 'react';
import "../scss/header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "../images/chat.png";
import Profile from "../images/profile.jpeg"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import DragIndicatorRoundedIcon from '@material-ui/icons/DragIndicatorRounded';
const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
        <div className="container">
        <a className="navbar-brand" href="#"><LinkedInIcon fontSize="large"/></a>
        <form className="form-inline form">
            <SearchIcon className="search-icon"/>
            <input className="form-control mr-sm-2 input-box" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#"><NotificationsIcon className="notification"/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><SmsRoundedIcon/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={Profile} className="profile-icon"/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><DragIndicatorRoundedIcon/></a>
            </li>
            <li className="nav-item">
                <button className="nav-link btn btn-lg button">upgrade to Premium</button> 
            </li>
            </ul>
        </div>
        </div>
        </nav>
    )
}
export default Header;