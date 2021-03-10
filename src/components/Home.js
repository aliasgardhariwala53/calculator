import React from "react";
import "./Home.css";
import Attendence from "./Attendence";
import { NavLink } from "react-router-dom";
import Calendar from 'react-calendar';
import './Calender.css';




const Home = () => {
    const currDate = new Date().toLocaleDateString();

    return (
        <body>
            <header className="header">
                <div className="logo">

                </div>
                <div className="date"> {currDate}</div>
                <div className="search"><input type="text" placeholder="    search" /></div>
                <div className="goodmorning">
                    <h1>Good Morning Sir</h1>
                </div>
            </header>
            <article className="article">
                <button><NavLink to="/">Home</NavLink></button>
                <button>Notice Board</button>
                <button><NavLink to="/attendence">Attendence</NavLink></button>
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
                <div className="holiday-flex">
                    <div><span>Holi Holiday</span>
                        <button> Holiday</button><br />
Activate every muscle group to get the results you’ve always wanted.  15th March 2021</div>
                    <div><span>Holi Holiday</span>
                        <button> Holiday</button><br />
Activate every muscle group to get the results you’ve always wanted.  15th March 2021</div>
                    <div><span>Holi Holiday</span>
                        <button> Holiday</button><br />
Activate every muscle group to get the results you’ve always wanted.  15th March 2021</div>


                </div>
                <div >
                    <div className="Attendence">
                        <div><h2>Attendence</h2></div>
                        <div>Today Overall Attendence</div>
                        <div className="circle"><svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="red " stroke-width="10" fill="white"/>
  Sorry, your browser does not support inline SVG.  
</svg> </div>
                        <div className="navlink">
                            <div><NavLink to="/">Present (%)</NavLink ></div>
                            <div><NavLink to="/">Absent (%)</NavLink></div>
                            <div><NavLink to="/attendence">Absent</NavLink></div>
                            </div>

                        </div>
                        <div className="Calender"><Calendar /></div>
                    </div>
                </section>
            </body>
)
}
export default Home;