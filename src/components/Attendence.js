import React from "react";
import {NavLink} from "react-router-dom";
import "./Attendence.css";
import Dropdown from "./Dropdown";
import Present from "./Present";
import "./Dropdown.css";



const Attendence=()=>{
    
    return (<body>
        <header className="header">
            <div className="logo">

            </div>
                <div className="goodmorning">
                    <h1>Attendence</h1>
                </div>
            </header>
            <article className="article">
                <button><NavLink to="/">Home</NavLink></button>
                <button>Notice Board</button>
                <button >Attendence</button>
                <button>Fees Details</button>
                <button>Calender</button>
                <button>Multimedia</button>
                <button>Time Table</button>
                <button>Schedule</button>
                <button>Support Request</button>
                <button>Support</button>
                <button>Account</button>
            </article>
            <section>
                <div className="drop">

              

<Dropdown/>
                </div>
                <div className="present-comp">
                    <Present/>
                    <Present/>
                    <Present/>
                    <Present/>
                    <Present/>
                    <Present/>
                </div>
            </section>
        </body>)
    }
    export default Attendence;