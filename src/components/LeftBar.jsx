import React, {useState} from 'react';
import './leftbar.css'; 
import {LeftBarData} from './LeftBarData'
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function LeftBarComponent () {
    const [sideBar, setSideBar] = useState(false); 

    const showSideBar = () => setSideBar(!sideBar)

    return (
        <>
        <div className="navBar">
            <Link to="#" className='menu-bars'>
                <MenuOutlinedIcon onClick={showSideBar}/>
            </Link>
        </div>
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <CancelOutlinedIcon />
                </Link>    
                </li>

                {LeftBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                           <Link to={item.link}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link> 
                        </li>
                    )
                })}

            </ul>
        </nav>
            {/* {LeftBarData.map((val,key) =>{
                return (
                <li key={key} 
                className="navrow"
                id={window.location.pathname == val.link ? "active" : ""}>
                    <div id="navicon">{val.icon}</div>
                    <div id="navtitle">{val.title}</div>
                </li>)
            })} */}
            
        </>
    )
}

// const LeftBar = React.memo(LeftBarComponent); 
// LeftBar.displayName = 'LeftBar'; 

export default LeftBarComponent; 