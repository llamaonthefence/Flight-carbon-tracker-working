import "../App.css"; 
import {LeftBarData} from './LeftBarData'

function LeftBar() {
    return (
        <div className="leftBar">
            <ul className="leftBarList">
            {LeftBarData.map((val,key) =>{
                return (
                <li key={key} 
                className="navrow"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {window.location.pathname=val.link}}>
                    <div id="navicon">{val.icon}</div>
                    <div id="navtitle">{val.title}</div>
                </li>)
            })}
            </ul>
        </div>
    )
}

export default LeftBar; 