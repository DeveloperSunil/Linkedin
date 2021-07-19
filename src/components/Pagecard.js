import React from 'react';
import '../scss/sidebar.scss';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Pagecard =(props) =>{
    return(
        <div className="page-card">
                    <div className="page-card-left">
                        <img src={props.logo}  className="page-card-logo"/>
                        <div className="page-card-content">
                            <div>
                                <h6>{props.heading}</h6>
                                <p>{props.source} <FiberManualRecordIcon className="dot-icon"/> {props.followers} followers</p>
                            </div>
                        </div>
                    </div>

                    <div className="page-card-right">
                        <VisibilityOutlinedIcon className="eye-icon"/>
                    </div>
        </div>
    );
}

export default Pagecard;


        