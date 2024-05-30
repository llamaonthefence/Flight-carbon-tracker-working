import React, {useState} from 'react';
import './leftbar.css'; 
import {LeftBarData} from './LeftBarData'
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import logo from '../assets/Logo-transparent.png'; 

// // function LeftBarComponent () {
// //     const [sideBar, setSideBar] = useState(false); 

// //     const showSideBar = () => setSideBar(sideBar)

// //     return (
// //         <>
// //         <div className="navBar">
// //             <Link to="#" className='menu-bars'>
// //                 <MenuOutlinedIcon onClick={showSideBar}/>
// //             </Link>
// //         </div>
// //         <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
// //             <ul className="nav-menu-items" onClick={!showSideBar}>
// //             <li className='navbar-toggle'>
// //                 <Link to="#" className='menu-bars'>
// //                     <CancelOutlinedIcon />
// //                 </Link>    
// //                 </li>

// //                 {LeftBarData.map((item, index) => {
// //                     return (
// //                         <li key={index} className={item.cName}>
// //                            <Link to={item.path}>
// //                             {item.icon}
// //                             <span>{item.title}</span>
// //                             </Link> 
// //                         </li>
// //                     )
// //                 })}

// //             </ul>
// //         </nav>
// //         </>
// //     )
// // }
//         function LeftBar() {
//             return (
//             <div className='LeftBar'> 
//             <ul>
//              {LeftBarData.map((val,key) =>{
//                 return (
//                 <li key={key} 
//                 className="navrow"
//                 id={window.location.pathname == val.link ? "active" : ""}>
//                     <div id="navicon">{val.icon}</div>
//                     <div id="navtitle">{val.title}</div>
//                 </li>)
    
//             })} 
//             </ul>
//             </div>
//         )
//         }   


// // const LeftBar = React.memo(LeftBarComponent); 
// // LeftBar.displayName = 'LeftBar'; 

// export default LeftBar; 

function LeftBar () {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar)
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                <MenuOutlinedIcon onClick={showSideBar} style={{ color: '#ffffff' }}/> 
                </Link>
            </div>
            <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <CancelOutlinedIcon id="close-icon" style={{ color: '#ffffff' }}/> 
                        </Link>
                    </li>
                    <li>
                        <img src={logo} alt="Logo" style={{ width: '50%', padding: '10px' }} />
                    </li>
                    {LeftBarData.map((item, index) => {
                             return (
                     <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                             </Link> 
                         </li>
                           )
                         })}
                </ul>
            </nav>
        
        </>
    )
}

export default LeftBar